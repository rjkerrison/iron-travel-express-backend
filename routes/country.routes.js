const router = require('express').Router()
const Country = require('../models/Country.model')
const Airport = require('../models/Airport.model')

/* GET countries */
router.get('/', async (req, res, next) => {
  const countries = await Country.find().populate('languages currencies')

  res.json(countries)
})

/* GET single country airports list */
router.get('/:cca3/airports', async (req, res, next) => {
  let { cca3 } = req.params
  cca3 = cca3.toLocaleUpperCase()

  try {
    const country = await Country.findOne({ cca3 });
    if (country) {
      const airport = await Airport.find({ countryId: country._id });
      res.json(airport)
    } else {
      throw new Error('Country not found')
    }
  } catch (error) {
    res.json(error.message)
  }
})

/* GET single country */
router.get('/:cca3', async (req, res, next) => {
  let { cca3 } = req.params
  cca3 = cca3.toLocaleUpperCase()

  const country = await Country.findOne({ cca3 }).populate(
    'languages currencies'
  )

  res.json(country)
})

module.exports = router
