const express = require('express')
const app = express()
const port = process.env.PORT || '3000'
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res, next) => res.send('🎡we out here'))

app.listen(port, () => console.log(`got you on ${port}`))
