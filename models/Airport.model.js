const { Schema, model } = require('mongoose')
const { linkTo } = require('./helpers')
const Country = require('./Country.model')

const airportSchema = new Schema({
  airportCode: String,
  country: linkTo(Country),

  lat: String,
  lon: String,
  name: String,
  city: String,
  state: String,
  woeid: String,
  tz: String,
  phone: String,
  type: String,
  email: String,
  url: String,
  runway_length: String,
  elev: String,
  icao: String,
  direct_flights: String,
  carriers: String,
})

const Airport = model('Airport', airportSchema)

module.exports = Airport
