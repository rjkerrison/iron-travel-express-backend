const { Schema, model } = require('mongoose')
const visitedSchema = new Schema(
  {
    country: { type: Schema.Types.ObjectId, ref: 'Country' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    recommend: { type: Boolean, default: false },
  },
  { timestamps: true }
)
const Visited = model('Visited', visitedSchema)
module.exports = Visited
