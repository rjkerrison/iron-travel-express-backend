const router = require('express').Router()
const Country = require('../models/Country.model')

/* GET countries */
router.get('/', async (req, res, next) => {
  const countries = await Country.find().populate('languages currencies')

  res.json(countries)
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

router.get('/favorited', async (req, res, next) => {
  let { countryId, userId } = req.params
  const countryFav = await Country.findOne({ countryId, userId }).populate('country' )

  res.json(countryFav)
})

module.exports = router
