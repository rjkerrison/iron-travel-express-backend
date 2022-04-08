const router = require('express').Router()
const Country = require('../models/Country.model')
const Wishlist = require('../models/WishlistModel')


router.get('/', async (req, res, next) => {
    let { countryId, userId } = req.params
    const countryFav = await Wishlist.find({country: countryId, user: userId}).populate('country' )
  
    res.json(countryFav)
})

module.exports = router