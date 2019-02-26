exports.seed = (knex, Promise) => {
  return knex('items').del()
    .then(() => {
      return knex('items').insert([
        { id: 1, name: 'Dark Chocolate Crunchies', unit_price: 4.39, quantity: 10 },
        { id: 2, name: 'Mint Wafers', unit_price: 1.19, quantity: 15 },
        { id: 3, name: 'Peppermint Poppers', unit_price: 2.38, quantity: 20 },
        { id: 4, name: 'Banana Bunches', unit_price: 9.99, quantity: 70 },
        { id: 5, name: 'Caramel Twists', unit_price: 4.99, quantity: 50 }
      ])
    })
}
