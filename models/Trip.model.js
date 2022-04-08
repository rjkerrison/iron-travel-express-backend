const { Schema, model } = require('mongoose')

const tripSchema = new Schema({
  country: { type: Schema.Types.ObjectId, ref: 'Country' },
  name: { type: Schema.Types.String },
  startDate: { type: Schema.Types.Date },
  endDate: { type: Schema.Types.Date },
})

const Trip = model('Trip', tripSchema)

module.exports = Trip
