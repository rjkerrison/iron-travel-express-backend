const { Schema, model } = require('mongoose')
const Currency = require('./Currency.model')
const { linkTo } = require('./helpers')
const Language = require('./Language.model')
const { nameSchema, imageSchema } = require('./schemas')

const countrySchema = new Schema({
  name: nameSchema,
  tld: [String],
  cca2: String,
  ccn3: String,
  cca3: String,
  cioc: String,
  independent: Boolean,
  status: String,
  unMember: Boolean,
  currencies: [linkTo(Currency)],
  idd: {
    root: String,
    suffixes: [String],
  },
  capital: [String],
  altSpellings: [String],
  region: String,
  subregion: String,
  languages: [linkTo(Language)],
  latlng: [Number],
  landlocked: Boolean,
  borders: [String],
  area: Number,
  flag: String,
  maps: {
    googleMaps: String,
    openStreetMaps: String,
  },
  population: Number,
  fifa: String,
  car: {
    signs: [String],
    side: String,
  },
  timezones: [String],
  continents: [String],
  flags: imageSchema,
  coatOfArms: imageSchema,
  startOfWeek: String,
  capitalInfo: {
    latlng: [Number],
  },
  postalCode: {
    format: String,
    regex: String,
  },
})

const Country = model('Country', countrySchema)

module.exports = Country
