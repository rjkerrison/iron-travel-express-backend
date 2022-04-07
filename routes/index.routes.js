const router = require('express').Router()
const authRoutes = require('./auth.routes')
const countryRoutes = require('./country.routes')

/* GET home page */
router.get('/', (req, res, next) => {
  res.json('All good in here')
})

router.use('/auth', authRoutes)
router.use('/countries', countryRoutes)

module.exports = router
