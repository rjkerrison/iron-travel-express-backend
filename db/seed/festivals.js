const mongoose = require('mongoose')
const Festival = require('../../models/Festivals.model')
const festivalJson = require('./festivals.json')
const Country = require('../../models/Country.model')
const connection = require('../index')

const createFestival = async (req, res, next) => {
    await Festival.deleteMany()
  for (const festivalToAdd of festivalJson) {
    const country = await Country.findOne({ cca3: festivalToAdd.cca3 })
    if (country) {
      await Festival.create({ ...festivalToAdd, country: country._id })
    }
  }
}
const perform =()=>{
    await connection
    await createFestival()
    await mongoose.connection.close()
}
perform()
