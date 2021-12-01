import express from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { BandDatabase } from "../data/BandDatabase";
import { BaseDatabase } from "../data/BaseDatabase";
import { ShowDatabase } from "../data/ShowDatabase";
import { Show, ShowInputDTO } from "../model/Show";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class ShowController {
  async createShow(req:express.Request, res:express.Response) {
    try {
      const weekDay = Show.toWeekDayEnum(req.body.weekDay)

      const input: ShowInputDTO = {
        weekDay,
        bandId: req.body.bandId,
        startTime: req.body.starTime,
        endTime: req.body.endTime
      }
      const showBusiness = new ShowBusiness(
        new ShowDatabase,
        new BandDatabase,
        new IdGenerator,
        new Authenticator
      )
      await showBusiness.createShow(input, req.headers.authorization as string)
      res.sendStatus(200)


    } catch (error:any) {
      res.status(error.customErrorCode || 400).send({message:error.message})


    } finally {
      await BaseDatabase.destroyConnection()
    }
  }

  async getShowsByWeekDay(req:express.Request, res:express.Response) {
    try {
      const weekDay = Show.toWeekDayEnum(req.query.weekDay as string)
      const showBusiness = new ShowBusiness(
        new ShowDatabase,
        new BandDatabase,
        new IdGenerator,
        new Authenticator
      )
      const shows = await showBusiness.getShowsByWeekDay(weekDay)
      res.status(200).send({shows})

    } catch (error:any) {
      res.status(error.customErrorCode || 400).send({message:error.message})


    } finally {
      await BaseDatabase.destroyConnection()
    }
  }
}