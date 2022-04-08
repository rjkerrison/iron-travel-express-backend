const router = require('express').Router()
const Visited = require('../models/Visited.model')

router.get('/', async (req, res) => {
  try {
    const visited = await Visited.find().populate('country')
    res.json(visited)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
