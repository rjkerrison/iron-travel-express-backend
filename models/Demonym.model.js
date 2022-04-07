const { model, Schema } = require('mongoose')
const { linkTo } = require('./helpers')

const demonymSchema = new Schema({
  language: linkTo('Language'),
  country: linkTo('Country'),
  f: String,
  m: String,
})

const Demonym = model('Demonym', demonymSchema)

module.exports = Demonym
