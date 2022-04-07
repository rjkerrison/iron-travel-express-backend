const Currency = require('../../models/Currency.model')
const countries = require('./countries.json')
const connection = require('../index')
const { default: mongoose } = require('mongoose')
const Language = require('../../models/Language.model')
const Demonym = require('../../models/Demonym.model')
const Country = require('../../models/Country.model')

const getCurrencyId = async ([code, { name, symbol }]) => {
  const currency = await Currency.findOneAndUpdate(
    { code },
    { code, name, symbol },
    { upsert: true, new: true }
  )
  return currency._id
}

const getLanguageId = async ([code, name]) => {
  const language = await Language.findOneAndUpdate(
    { code },
    { code, name },
    { upsert: true, new: true }
  )
  return language._id
}

const getDemonymId = async ([languageCode, { f, m }], country) => {
  const language = await Language.findOne({ code: languageCode })
  if (!language) {
    // nothing we can do for now
    return null
  }
  const demonym = await Demonym.findOneAndUpdate(
    { language: language._id, country: country._id },
    { language, country, f, m },
    { upsert: true, new: true }
  )
  return demonym._id
}

const extractAndUpdate = async (obj, property, idGetter) => {
  if (!obj[property]) {
    console.error('property', property, 'not found on', obj.name)
    return
  }
  const entries = Object.entries(obj[property])
  const ids = await Promise.all(entries.map(idGetter))
  obj[property] = ids
}

const seedCountry = async (country) => {
  await Promise.all([
    extractAndUpdate(country, 'currencies', getCurrencyId),
    extractAndUpdate(country, 'languages', getLanguageId),
  ])
  const demonyms = { demonyms: country.demonyms }
  const createdCountry = await Country.findOneAndUpdate(
    { cca3: country.cca3 },
    country,
    {
      upsert: true,
      new: true,
    }
  )
  await extractAndUpdate(demonyms, 'demonyms', (info) =>
    getDemonymId(info, createdCountry)
  )
  console.log(createdCountry, demonyms)
}

const perform = async () => {
  await connection

  await Promise.all(countries.map((country) => seedCountry(country)))

  await mongoose.connection.close()
}

perform()
