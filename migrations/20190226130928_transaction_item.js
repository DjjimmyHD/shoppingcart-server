
exports.up = (knex, Promise) => {
  return knex.schema.createTable('transaction_item', table => {
    table.integer('transaction_info').references('transactions.id').onDelete('cascade')
    table.integer('item_info').references('items.id').onDelete('cascade')
    table.primary(['transaction_info', 'item_info'])
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('transaction_item')
}
