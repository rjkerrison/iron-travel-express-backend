const { model, Schema } = require('mongoose')
const { linkTo } = require('./helpers')

const demonymSchema = new Schema({
  language: linkTo('Language'),
  f: {
    type: 'String',
  },
  m: {
    type: 'String',
  },
})

const Demonym = model('Demonym', demonymSchema)

module.exports = Demonym
