const { model, Schema } = require('mongoose')
const Country = require('./Country.model')

const landmarkSchema = new Schema({
  country: String,
  name: String,
  description: String,
  image: String
})

const Landmark = model('Landmark', landmarkSchema)

module.exports = Landmark
