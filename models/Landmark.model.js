const { model, Schema } = require('mongoose')
const Country = require('./Country.model')

const landmarkSchema = new Schema({
  country: {
    type: Schema.Types.ObjectId, Country
  },
  name: String,
  description: String,
  image: String
})

const Landmark = model('Landmark', landmarkSchema)

module.exports = Landmark
