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
        country: countryId,

        lat: airport?.lat?.length ? airport.lat : undefined,
        lon: airport?.lon?.length ? airport.lon : undefined,
        name: airport?.name?.length ? airport.name : undefined,
        city: airport?.city?.length ? airport.city : undefined,
        state: airport?.state?.length ? airport.state : undefined,
        woeid: airport?.woeid?.length ? airport.woeid : undefined,
        tz: airport?.tz?.length ? airport.tz : undefined,
        phone: airport?.phone?.length ? airport.phone : undefined,
        type: airport?.type?.length ? airport.type : undefined,
        email: airport?.email?.length ? airport.email : undefined,
        url: airport?.url?.length ? airport.url : undefined,
        runway_length: airport?.runway_length?.length ? airport.runway_length : undefined,
        elev: airport?.elev?.length ? airport.elev : undefined,
        icao: airport?.icao?.length ? airport.icao : undefined,
        direct_flights: airport?.direct_flights?.length ? airport.direct_flights : undefined,
        carriers: airport?.carriers?.length ? airport.carriers : undefined,
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
