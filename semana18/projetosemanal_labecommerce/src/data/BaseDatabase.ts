//Criando uma classe para abstração do Banco de Dados
import knex from "knex";
import dotenv from "dotenv"

dotenv.config()

export class BaseDatabase {
  static connection = knex({
    client:"mysql",
    connection:{
      host:process.env.DB_HOST,
      user:process.env.DB_USER,
      password:process.env.DB_PASSWORD,
      database:process.env.DB_SCHEMA,
      port:3306,
      multipleStatements:true
    }
  })
  closeConnection = () => {
    BaseDatabase.connection.destroy() //Sem definir o static no connect, não é óssível fazer a closeConnection funcionar.
  }
}