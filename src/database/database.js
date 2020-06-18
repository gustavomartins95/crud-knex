const dbConf = require('../configs/database.json')
const knex = require('knex')(dbConf)

module.exports = knex
