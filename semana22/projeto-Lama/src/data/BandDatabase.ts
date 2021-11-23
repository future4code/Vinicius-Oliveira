import { NotFoundError } from "../error/NotFoundError";
import { Band } from "../model/Band";
import { BaseDatabase } from "./BaseDatabase";

export class BandDatabase extends BaseDatabase {
  private static TABLE_NAME = "NOME_TABELA_BANDAS"

  public async createBand(band: Band): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id:band.getId(),
          name:band.getName(),
          music_genre:band.getMainGenre(),
          responsible:band.getresponsible()
        })
        .into(BandDatabase.TABLE_NAME)
    } catch (error:any) {
      throw new Error(error.sqlMessage || error.Message)
    }
  }

  public async getBandByIdOrNameOrFail(input:string):Promise<Band> {
    const band = await this.getConnection()
      .select("*")
      .from(BandDatabase.TABLE_NAME)
      .where({id:input})
      .orWhere({name:input})

      if(!band[0]){
        throw new NotFoundError(`Unable to find Band with input: ${input}`)
      }
      return Band.toBand(band[0])!
  }
}