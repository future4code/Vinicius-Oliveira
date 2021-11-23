import express from "express";
import { BandBusiness } from "../business/BandBusiness";
import { BandDatabase } from "../data/BandDatabase";
import { BaseDatabase } from "../data/BaseDatabase";
import { BandInputDTO } from "../model/Band";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class BandController {
  //Será um método async, pois precisarei criar alguma coisa no banco, ou seja, vai rolar uma requisição de comunicação com o DB.
  async registerBand(req:express.Request, res: express.Response){
    try {
      const input: BandInputDTO = {
        name: req.body.name,
        mainGenre: req.body.mainGenre,
        responsible:req.body.responsible
      }

      const bandBusiness = new BandBusiness(
        new BandDatabase,
        new IdGenerator,
        new Authenticator
      )
      await bandBusiness.registerBand(input, req.headers.authorization as string)
      res.sendStatus(200)
    } catch (error:any) {
      res.status(error.customErrorCode || 400).send({message:error.message})
    } finally {
      await BaseDatabase.destroyConnection()
    }
  }

  async getBandDetail(req:express.Request, res: express.Response){
    try {
      //(req.query.id ?? req.query.name),caso a requisição de query.id seja nula, então eu vou receber query.name. Os "??" se chama operador nullish.
      const input  = (req.query.id ?? req.query.name) as string

      const bandBusiness = new BandBusiness(
        new BandDatabase,
        new IdGenerator,
        new Authenticator
      )

      const band = await bandBusiness.getBandDetailByIrOrName(input)
      res.status(200).send(band)
    } catch (error:any) {
      res.status(error.customErrorCode || 400).send({message:error.message})
    } finally {
      await BaseDatabase.destroyConnection()
    }
  }
}