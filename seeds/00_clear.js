
exports.seed = (knex, Promise) => {
  return knex('transaction_item').del()
    .then(() => knex('transactions').del())
    .then(() => knex('items').del())
    .then(() => knex('user_accounts').del())
}
