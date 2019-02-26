exports.seed = (knex, Promise) => {
  return knex('transactions').del()
    .then(() => {
      return knex('transactions').insert([
        { id: 1, user_account_id: 1 },
        { id: 2, user_account_id: 4 },
        { id: 3, user_account_id: 4 },
        { id: 4, user_account_id: 4 },
        { id: 5, user_account_id: 3 },
        { id: 6, user_account_id: 2 }
      ])
    })
}
