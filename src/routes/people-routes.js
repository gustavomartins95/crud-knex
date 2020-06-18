const express = require('express')
const peopleController = require('../controllers/people-controller')

const peopleRoutes = ({ knex }) => {
  const router = express.Router()

  router.get('/', peopleController.findAll.bind(null, knex))
  router.get('/create', (req, res) => res.render('create.ejs'))
  router.post('/create', peopleController.create.bind(null, knex))
  router.get('/:id', peopleController.findById.bind(null, knex))
  router.post('/update/:id', peopleController.update.bind(null, knex))
  router.get('/delete/:id', peopleController.deleteById.bind(null, knex))

  return router
}

module.exports = peopleRoutes
