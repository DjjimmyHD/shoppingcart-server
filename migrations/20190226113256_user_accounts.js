
exports.up = (knex, Promise) => {
  return knex.schema.createTable('user_accounts', (userAccount) => {
    userAccount.increments()
    userAccount.string('username')
    userAccount.string('first_name')
    userAccount.string('last_name')
    userAccount.string('email')
    userAccount.string('password')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('user_accounts')
}
