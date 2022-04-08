const User = require('../../models/User.model')
const Country = require('../../models/Country.model')
const Wishlist = require('../../models/WishlistModel')
const connection = require('../index')
const { default: mongoose } = require('mongoose')

const CreateUser = async () => {
  await User.create({
    username: 'Noa',
    password: 'azertyuiop',
  })
}

const seedWishlist = async () => {
  const user = await User.findOne({ username: 'Noa' })
  const countryList = ['JPN', 'FRA']
  // countryList.forEach(async (country) => {
  //   const countryFav = await Country.find({ cca3: country })
  //   await Wishlist.create({ country: countryFav, user: user })
  // })
  for (let i = 0; i < countryList.length; i++) {
    console.log('countryList[i]', countryList[i])
    const countryFav = await Country.findOne({ cca3: countryList[i] })
    console.log('countryFav', countryFav)
    console.log('countryFav._id', countryFav._id)
    const createdWishlist = await Wishlist.create({
      country: countryFav,
      user: user,
    })
    console.log('createdWishlist', createdWishlist)
  }
}

const perform = async () => {
  await connection
  await CreateUser()
  await seedWishlist()

  await mongoose.connection.close()
}

perform()
