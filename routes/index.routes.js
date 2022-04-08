const router = require('express').Router()
const authRoutes = require('./auth.routes')
const countryRoutes = require('./country.routes')
const festivalRoutes = require('./festival.routes')

/* GET home page */
router.get('/', (req, res, next) => {
  res.json('All good in here')
})

router.use('/auth', authRoutes)
router.use('/countries', countryRoutes)
router.use('/festival', festivalRoutes)

module.exports = router
