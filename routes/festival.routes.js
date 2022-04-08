const router = require('express').Router()
const Festival = require('../models/Festival.model')

/* GET festival */
router.get('/', async (req, res, next) => {
  const festival = await Festival.find().populate('country')

  res.json(festival)
})

/* GET single country */
router.get('/:id', async (req, res, next) => {
  let { id } = req.params

  const festival = await Festival.findById(id).populate('country')

  res.json(festival)
})

module.exports = router
