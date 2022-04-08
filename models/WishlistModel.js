const {Schema, model} = require ('mongoose')

const wishlistModel = new Schema({
    country: {type: Schema.Types.ObjectId, ref: 'Country'},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
})

const Wishlist = model('Wishlist', wishlistModel)

module.exports = Wishlist