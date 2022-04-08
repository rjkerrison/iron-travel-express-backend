const countries = require('./countries.json')
const connection = require('../index')
const { default: mongoose } = require('mongoose')
const Country = require('../../models/Country.model')
const Airports = require('../../models/Airports.model')


// getCountryId -> take the name and returns the ID
const getCountryId = async (countryName) => {
  try {
    const country = await Country.findOne({ [name.common]: countryName })
  } catch (error) {

  }
}


const seedAirport = async (airport) => {
  try {
    const countryId = await getCountryId(airport.country);
    const createdAirport = await Country.findOneAndUpdate()

    console.log(createdAirport)
  } catch (error) {
    console.log(error)
  }
}

const perform = async () => {
  await connection

  await Promise.all(Airports.map((airport) => seedAirport(airport)))

  await mongoose.connection.close()
}

perform()
