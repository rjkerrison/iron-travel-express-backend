const { Schema, model } = require('mongoose')

const horaireSchema = new Schema({
  openHour: Number,
  closeHour: Number,
  dayOfWeek: String,
})

const placeSchema = new Schema({
  name: String,
  latitude: Number,
  longitude: Number,
  // making this open ended to account for places without service continu
  horaires: [horaireSchema],
})

const Place = new model('Place', placeSchema)

const restaurantSchema = new Schema({
  cuisines: [String],
  rating: Number,
  isTakeaway: Boolean,
  hasIndoorSeating: Boolean,
  hasOutdoorSeating: Boolean,
})

const Restaurant = Place.discriminator('Restaurant', restaurantSchema)

const TheatreSchema = new Schema({
  genres: [String],
  isIndoor: Boolean,
  isBourgeois: Boolean,
})

const Theatre = Place.discriminator('Theatre', TheatreSchema)

module.exports = {
  Restaurant,
  Theatre,
  Place,
}
