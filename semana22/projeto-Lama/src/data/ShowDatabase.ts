import { NotFoundError } from "../error/NotFoundError";
import { Show, ShowOutputDTO, WeekDay } from "../model/Show";
import { BaseDatabase } from "./BaseDatabase";

export class ShowDatabase extends BaseDatabase {

  //Promise<void>, porque o banco não vai gerar nada na saída do banco.
  public async createShow(show: Show):Promise<void>{
    await this.getConnection()
      .insert({
        id:show.getId(),
        week_day:show.getWeekDay(),
        band_id:show.getBandId(),
        start_time:show.getStartTime(),
        end_time:show.getEndTime()
      })
      .into(this.tableNames.shows)
  }

  public async getShowsByTimes(
    weekDay: WeekDay,
    startTime:number,
    endTime:number
  ):Promise<ShowOutputDTO[]>{
    const shows = await this.getConnection()
    //Utilizando os próprios métodos do knex para fazer a conexão, puxando os dados necessários do DB e analisando conforme requisitado.
    .select("*") //Selecionando tudo
    .where("end_time", ">", `${startTime}`) //Where, no DB end_time > startTime
    .andWhere("start_time", "<", `${endTime}`) //AndWhere, no DB start_time < endTime
    .from(this.tableNames.shows)

    //Utilizando o método .raw, para analisar diretamente no DB.
    // .raw(
    //   `
    //   SELECT show.id as id,
    //     show.start_time as starTime,
    //     show.end_time as endTime,
    //     show.week_day as weekDay,
    //   FROM ${this.tableNames.shows} show
    //   WHERE show.week_day = "${weekDay}"
    //   AND WHERE show.start_time <= "${endTime}"
    //   AND WHERE show.end_time >= "${startTime}"
    //   ORDER BY startTime ASC
    //   `
    // )
    return shows.map((show:any) => ({
        id:show.id,
        bandId:show.bandId,
        startTime:show.startTime,
        endTime:show.endTime,
        weekDay:show.weekDay
    }))
  }

  public async getShowsByWeekDayOrFail(weekDay:WeekDay): Promise<ShowOutputDTO> {
    const shows = await this.getConnection()
    .raw(
      `
      SELECT show.id as id,
        band.id as bandId,
        show.start_time as startTime,
        show.end_time as endTime,
        show.week_day as weekDay,
        band.music_genre as mainGenre
      FROM ${this.tableNames.shows} show
      LEFT JOIN ${this.tableNames.bands} band ON band.id = show.band_id
      WHERE show.week_day = "${weekDay}"
      ORDER BY startTime ASC
      `
    )
    //Validação para verificar se recebi um Show ou não
    if(!shows.length) {
      throw new NotFoundError(`Unable to find shows at ${weekDay}`);
    }
    return shows[0].map((data:any) => ({
      id:data.id,
      bandId:data.bandId,
      startTime:data.startTime,
      endTime:data.endTime,
      weekDay:data.weekDay,
      mainGenre:data.mainGenre
    }))
  }
}