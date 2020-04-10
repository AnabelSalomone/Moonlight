import {Pool} from 'pg';

// TODO: store these variables elsewhere
const pool = new Pool(
    {
        user: 'postgres',
        host: '192.168.99.101',
        database: 'postgres',
        password: 'changeme',
        port: 5432,
      }
)

export default class Db {
  static query =  (text:any, params:any) => {
    return pool.query(text, params)
  }
}