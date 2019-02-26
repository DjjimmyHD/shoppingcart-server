
exports.up = (knex, Promise) => {
  return knex.schema.createTable('items', (item) => {
    item.increments()
    item.string('name')
    item.decimal('unit_price')
    item.integer('quantity')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('items')
}
