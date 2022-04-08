const router = require('express').Router()
const authRoutes = require('./auth.routes')
const countryRoutes = require('./country.routes')

const tripRoutes = require('./trip.routes')
const visitedRoutes = require('./visited.routes')

/* GET home page */
router.get('/', (req, res, next) => {
  res.json('All good in here')
})

router.use('/auth', authRoutes)
router.use('/countries', countryRoutes)

router.use('/trips', tripRoutes)
router.use('/visited', visitedRoutes)


module.exports = router
