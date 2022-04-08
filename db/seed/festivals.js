const mongoose = require('mongoose')
const Festival = require('../../models/Festivals.model')
const festivalJson = require('./festivals.json')
const Country = require('../../models/Country.model')
require('../index')

const createFestival = async (req, res, next) => {
  for (const festivalToAdd of festivalJson) {
    const country = await Country.findOne({ cca3: festivalToAdd.cca3 })
    if (country) {
      await Festival.create({ ...festivalToAdd, country: country._id })
    }
  }
}
createFestival()
