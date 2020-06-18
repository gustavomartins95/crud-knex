const peopleModel = require('../models/people-model')

const findById = async (knex, req, res) => {
  try {
    const person = await peopleModel.findById(knex, req.params.id)
    res.render('edit.ejs', { person })
  } catch (error) {
    res.status(500).json(error)
  }
}

const findAll = async (knex, req, res) => {
  try {
    const people = await peopleModel.findAll(knex)
    res.render('index.ejs', { people })
  } catch (error) {
    res.status(500).json(error)
  }
}

const create = async (knex, req, res) => {
  try {
    await peopleModel.create(knex, req.body)
    res.redirect('/')
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (knex, req, res) => {
  try {
    await peopleModel.update(knex, req.params.id, req.body)
    res.redirect('/')
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteById = async (knex, req, res) => {
  try {
    await peopleModel.deleteById(knex, req.params.id)
    res.redirect('/')
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  findById,
  findAll,
  create,
  update,
  deleteById
}
