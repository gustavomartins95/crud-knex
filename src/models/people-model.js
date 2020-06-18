const findById = async (knex, id) => {
  return await knex('people').where({ id }).first()
}

const findAll = async (knex) => {
  return await knex('people').orderBy('birth_date', 'asc')
}

const create = async (knex, person) => {
  return await knex('people').insert(person)
}

const update = async (knex, id, person) => {
  return await knex('people').update(person).where({ id })
}

const deleteById = async (knex, id) => {
  return await knex('people').delete().where({ id })
}

module.exports = {
  findById,
  findAll,
  create,
  update,
  deleteById
}
