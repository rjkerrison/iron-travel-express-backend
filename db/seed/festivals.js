const mongoose = require('mongoose')
const Festival = require('../../models/Festivals.model')

const createFestival = async (req, res, next) => {
  await Festival.findOne()
  await Festival.create()
  return
}
