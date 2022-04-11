const router = require('express').Router()
const Country = require('../models/Country.model')
const Wishlist = require('../models/WishlistModel')

router.get('/:userId', async (req, res, next) => {
  let { countryId, userId } = req.params
  console.log('req.params', req.params)
  console.log(' userId:', userId)
  console.log('countryId,:', countryId)
  const countryFav = await Wishlist.find({
    user: userId,
  }).populate('country')

  res.json(countryFav)
})

module.exports = router
