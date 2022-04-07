const { Schema } = require('mongoose')

const linkTo = (ref) => {
  return { type: Schema.Types.ObjectId, ref }
}

module.exports = {
  linkTo,
}
