// For shared schemas or small subdocument schemas
const { Schema } = require('mongoose')

const nameSchema = new Schema({
  official: {
    type: 'String',
  },
  common: {
    type: 'String',
  },
})

const imageSchema = {
  png: {
    type: 'String',
  },
  svg: {
    type: 'String',
  },
}

module.exports = {
  nameSchema,
  imageSchema,
}
