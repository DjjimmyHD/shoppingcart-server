
exports.up = (knex, Promise) => {
  return knex.schema.createTable('transactions', (transaction) => {
    transaction.increments()
    transaction
      .integer('user_account_id')
      .references('user_accounts.id')
      .onDelete('cascade')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('transactions')
}
