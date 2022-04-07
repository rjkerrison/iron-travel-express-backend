const { model, Schema } = require('mongoose')

const currencySchema = new Schema({
  name: {
    type: 'String',
    unique: true,
  },
  symbol: {
    type: 'String',
    unique: true,
  },
})

const Currency = model('Currency', currencySchema)

module.exports = Currency
