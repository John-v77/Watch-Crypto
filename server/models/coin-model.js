const mongoose = require('mongoose')

const Schema = mongoose.Schema

const coinSchema = new Schema({
    title: {type:String, required:true},
    ticker: {type:String, required:true}
})

module.exports = mongoose.model('Coin', coinSchema)