const db = require('../db/connection')
const getAllUsers = () => db('user_accounts')

module.exports = {
  getAllUsers
}
