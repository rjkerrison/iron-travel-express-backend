const User = require('../../models/User.model')
const Country = require('../../models/Country.model')
const Wishlist = require('../../models/WishlistModel')
const connection = require('../index')
const { default: mongoose } = require('mongoose')

const CreateUser = async () => {
    await User.create({
        username: 'Noa',
        password: 'azertyuiop'
    })
}

const seedWishlist = async () => {
    const user = await User.findOne({username: 'Noa'})
    const countryFav = await Country.findOne({cc3: 'ESP'})
    await Wishlist.create({country: countryFav, user: user})
}

const perform = async () => {
    await connection
  
    await CreateUser()
    await seedWishlist()
  
    await mongoose.connection.close()
}

perform()