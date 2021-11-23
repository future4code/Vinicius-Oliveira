export interface BandInputDTO{
  name: string
  mainGenre: string
  responsible: string
}

export class Band {
  constructor(
    private id: string,
    private name: string,
    private mainGenre: string,
    private responsible: string
  ){}

  public getId():string {
    return this.id
  }
  public getName():string {
    return this.name
  }
  public getMainGenre():string {
    return this.mainGenre
  }
  public getresponsible():string {
    return this.responsible
  }
  public setName(name:string) {
    return this.name = name
  }
  public setMainGenre(mainGenre:string) {
    return this.mainGenre = mainGenre
  }
  public setresponsible(responsible:string) {
    return this.responsible = responsible
  }

  //Se tiver data, vou retornar a criação de uma nova band, caso seja inserido de acordo com o modelo abaixo.
  public static toBand(data?:any): Band | undefined {
    return (data && new Band(
      data.id,
      data.name,
      data.mainGenre || data.main_genre || data.music_genre || data.musicGenre,
      data.responsible
    ))
  }
}