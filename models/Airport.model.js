const { Schema, model } = require('mongoose')
const { linkTo } = require('./helpers')
const Country = require('./Country.model')

const airportSchema = new Schema({
  airportCode: String,
  countryId: linkTo(Country),
})

const Airport = model('Airport', airportSchema)

module.exports = Airport
