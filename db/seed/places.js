const connection = require('../index')
const { default: mongoose } = require('mongoose')
const { Restaurant, Theatre, Place } = require('../../models/Place.model')

const restaurants = [
  {
    name: "L'as Du Fallafel",
    cuisines: ['Levantine', 'Kosher'],
    rating: 5,
    isTakeaway: true,
    hasIndoorSeating: true,
    hasOutdoorSeating: false,
  },
  {
    name: 'Tripletta Belleville',
    cuisines: ['Pizza'],
    rating: 4,
    isTakeaway: true,
    hasIndoorSeating: true,
  },
]

const theatres = [
  {
    name: 'Theatre du Nord-Ouest',
    genres: ['Russian', 'New'],
    isIndoor: true,
    isBourgeois: false,
  },
  {
    name: 'Theatre du Chatelêt',
    genres: ['Classic', 'French'],
    isIndoor: true,
    isBourgeois: true,
  },
]

const createPlaces = async (req, res, next) => {
  await Restaurant.deleteMany()
  await Theatre.deleteMany()

  const restos = await Restaurant.create(restaurants)
  const salles = await Theatre.create(theatres)

  const places = await Place.find({ isIndoor: true })
  console.log(places)

  console.log(
    `Created ${restos.length} restaurants and ${salles.length} theatres`
  )
}
const perform = async () => {
  await connection
  await createPlaces()
  await mongoose.connection.close()
}
perform()
