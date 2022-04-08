const router = require('express').Router()
const Country = require('../models/Country.model')
const Trip = require('../models/Trip.model')

/* GET countries */
router.get('/', async (req, res, next) => {
  const trips = await Trip.find().populate('country')
  console.log(trips)
  res.json(trips)
})

// /* GET single country */
// router.get('/:cca3', async (req, res, next) => {
//   let { cca3 } = req.params
//   cca3 = cca3.toLocaleUpperCase()

//   const country = await Country.findOne({ cca3 }).populate(
//     'languages currencies'
//   )

//   res.json(country)
// })

module.exports = router
