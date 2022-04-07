const { model, Schema } = require('mongoose')

const languageSchema = new Schema({
  code: { type: String, unique: true },
  name: { type: String, unique: true },
})

const Language = model('Language', languageSchema)

module.exports = Language
