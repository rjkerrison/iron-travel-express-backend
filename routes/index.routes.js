const router = require('express').Router()
const authRoutes = require('./auth.routes')
const countryRoutes = require('./country.routes')
const wishlistRoutes = require('./favorites.routes')
const festivalRoutes = require('./festival.routes')
const tripRoutes = require('./trip.routes')
const visitedRoutes = require('./visited.routes')

/* GET home page */
router.get('/', (req, res, next) => {
  res.json('All good in here')
})

router.use('/auth', authRoutes)
router.use('/countries', countryRoutes)
router.use('/favorites', wishlistRoutes)
router.use('/festivals', festivalRoutes)
router.use('/trips', tripRoutes)
router.use('/visited', visitedRoutes)


module.exports = router
