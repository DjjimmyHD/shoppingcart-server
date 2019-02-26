
exports.seed = (knex, Promise) => {
  return knex('transaction_item').del()
    .then(function () {
      return knex('transaction_item').insert([
        {
          transaction_info: 1,
          item_info: 1
        },
        {
          transaction_info: 1,
          item_info: 2
        },
        {
          transaction_info: 1,
          item_info: 3
        },
        {
          transaction_info: 2,
          item_info: 4
        },
        {
          transaction_info: 3,
          item_info: 5
        }
      ])
    })
}
