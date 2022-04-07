const { model, Schema } = require('mongoose')

const currencySchema = new Schema({
  code: {
    type: String,
    unique: true,
  },
  name: String,
  symbol: String,
})

const Currency = model('Currency', currencySchema)

module.exports = Currency
