module.exports = {
  development: {
    client: 'pg',
    connection: 'localhost:///generic_store'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
}
