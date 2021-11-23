import { BandDatabase } from "../data/BandDatabase";
import { ShowDatabase } from "../data/ShowDatabase";
import { InvalidInputError } from "../error/InvalidInputError";
import { NotFoundError } from "../error/NotFoundError";
import { UnauthorizedError } from "../error/UnauthorizedError";
import { Show, ShowInputDTO, WeekDay } from "../model/Show";
import { UserRole } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class ShowBusiness {
  constructor(
    private showDatabase: ShowDatabase,
    private bandDatabase: BandDatabase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator,
  ){}

  async createShow(input: ShowInputDTO, token: string) {
    //Verificando se o user é ADMIN
    const tokenData = this.authenticator.getData(token)
    if(tokenData.role !== UserRole.ADMIN) {
      throw new UnauthorizedError(`Only ADMINS can access this feature`)
    }

    //Validando o INPUT
    if(!input.bandId || !input.weekDay || !input.startTime || !input.endTime) {
      throw new InvalidInputError(`Invalid INPUT to create Show`)
    }

    //Validando os horários com base no enunciado
    if(input.startTime < 8 || input.endTime > 23 || input.startTime >= input.endTime) {
      throw new InvalidInputError(`Invalid TIMES to create Show`)
    }

    //Verificando se o valor da hora inserida é INTEIRO
    if(!Number.isInteger(input.startTime) || !Number.isInteger(input.endTime)) {
      throw new InvalidInputError(`Invalid INT TIMES to create Show`)
    }

    //Verificando se o ID da BANDA é válido
    const band = await this.bandDatabase.getBandByIdOrNameOrFail(input.bandId)

    //Se a banda não existir
    if(!band) {
      throw new NotFoundError(`Band not found in DATABASE`)
    }

    //Validação de Concomitância
    const registeredShows = await this.showDatabase.getShowsByTimes(input.weekDay, input.startTime, input.endTime)
    if(registeredShows.length) {
      throw new InvalidInputError(`No more shows can be created at this TIMES`)
    }

    //Nenhuma outra VALIDAÇÃO, então vamos criar o SHOW
    await this.showDatabase.createShow(
      Show.toShow({
        ...input,
        id: this.idGenerator.generate()
      })
    )
  }

  async getShowsByWeekDay(weekDay: WeekDay) {
    if(!weekDay) {
      throw new InvalidInputError(`Invalid INPUT to get Shows By Week Day`)
    }

    const shows = await this.showDatabase.getShowsByWeekDayOrFail(weekDay)
    return {result:shows}
  }
}
