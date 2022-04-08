const mongoose = require('mongoose')
const Country = require('../../models/Country.model')
const Visited = require('../../models/Visited.model')
const User = require('../../models/User.model')

const connection = require('../index')

const createdVisited = async () => {
  const countries = await Country.find().select('_id')
  const user = await User.findOne({username: 'Noa'})
  const visited = await Visited.create({
    country: countries[Math.floor(Math.random() * countries.length)],
    user: user
  })
}


for (let i = 0; i < 20; i++) {
  createdVisited()
}