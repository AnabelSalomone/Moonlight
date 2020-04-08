const { Pool } = require('pg')

//TODO: store these variables elsewhere
const pool = new Pool(
    {
        user: 'postgres',
        host: '192.168.99.101',
        database: 'postgres',
        password: 'changeme',
        port: 5432,
      }
)

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}