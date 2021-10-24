//Estabelecendo o setup de connection com o mySQL
import knex from 'knex'

const connection = knex({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    port: 3006
  }
})
export {connection}