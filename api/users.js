const express = require('express')
const router = express.Router()
const queries = require('../queries/user')

router.get('/', (req, res, next) => {
  return queries.getAllUsers()
    .then(users => res.json(users))
})

module.exports = router
