const countries = require('./countries.json')
const connection = require('../index')
const { default: mongoose } = require('mongoose')
const Country = require('../../models/Country.model')
const Airport = require('../../models/Airport.model')
const airports = require('./airports.json')

// getCountryId -> take the name and returns the ID
const getCountryId = async (countryName) => {
  const country = await Country
    .findOne({ $or: [{ 'name.common': countryName }, { 'name.official': countryName }] })
  return country?._id;
}

const seedAirport = async (airport) => {
  try {
    const countryId = await getCountryId(airport.country);
    if (countryId) {
      const createdAirport = await Airport.create({
        airportCode: airport.code,
        countryId
      })
      console.log(`${airport.country} airport is: `,createdAirport)
    } else {
      console.log(`No country for ${airport.country}...`)

    }
  } catch (error) {
    console.log(error)
  }
}

const perform = async () => {
  await connection
  await Airport.deleteMany();
  await Promise.all(airports.map((airport) => seedAirport(airport)))
  await mongoose.connection.close()
}

perform()
