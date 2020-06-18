const port = process.env.PORT || 3000
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, '..', 'public')))

const knex = require('./database/database')
const dependencies = { knex }

const peopleRoutes = require('./routes/people-routes')

app.use('/', peopleRoutes(dependencies))

app.listen(port, (err) => {
  if (err) {
    console.log('error', err)
    throw err
  } else {
    console.log(`Server started on port ${port}`)
  }
})
