const { Schema, model } = require('mongoose')

const festivalSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Country',
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  entryPrice: {
    type: Number,
    required: true,
  },
  bookingDeadLine: {
    type: Date,
    required: true,
  },
  capacity: {
    type: Number,
  },
})

const Festival = model('Festival', festivalSchema)

module.exports = Festival
