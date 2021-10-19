import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { user } from "../types";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {

    const { name, nickname, email, password } = req.body

    if (!name || !nickname || !email || !password) {
      res.statusCode = 422
      throw new Error("Preencha os campos 'name', 'nickname', 'password' e 'email'")
    }

    const [user] = await connection('to_do_list_users')
      .where({ email })

    if (user) {
      res.statusCode = 409
      throw new Error('Email já cadastrado')
    }

    const id: string = new IdGenerator().generateId()

    const newUser: user = { id, name, nickname, email, password }

    await connection('to_do_list_users')
      .insert(newUser)

    const token = new Authenticator().generateToken({ id })

    res.status(201).send({ newUser, token })

  } catch (error) {

    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" })
    } else {
      res.send({ message: error.sqlMessage || error.message })
    }
  }
}