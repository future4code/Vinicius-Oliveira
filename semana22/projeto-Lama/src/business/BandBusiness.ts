import { BandDatabase } from "../data/BandDatabase";
import { InvalidInputError } from "../error/InvalidInputError";
import { UnauthorizedError } from "../error/UnauthorizedError";
import { Band, BandInputDTO } from "../model/Band";
import { UserRole } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class BandBusiness {
  constructor(
    private bandDatabase:BandDatabase,
    private idGenerator:IdGenerator,
    private authenticator:Authenticator
  ){}
  async registerBand(input:BandInputDTO, token: string) {
    //Primeiro pego o meu token para saber se é NORMAL ou ADMIN.
    const tokenData = this.authenticator.getData(token)

    //Verificação de Role
    if(tokenData.role !== UserRole.ADMIN) {
      throw new UnauthorizedError("Only ADMINS can access this feature!")
    }

    //Verificação de Input
    if(!input.name || !input.mainGenre || !input.responsible) {
      throw new InvalidInputError("Invalid input to register band.")
    }

    //Criação da band, estou passando os dados do input e inserindo a criação de uma id.
    await this.bandDatabase.createBand(
      Band.toBand({
        ...input,
        id:this.idGenerator.generate()
      })!
    )
  }

  async getBandDetailByIrOrName(input: string): Promise<Band> {
    if(!input){
      throw new InvalidInputError("Invalid input to getBandDetails")
    }

    return this.bandDatabase.getBandByIdOrNameOrFail(input)
  }
}