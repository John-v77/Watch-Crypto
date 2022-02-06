const mongoose = require('mongoose')

const Schema = mongoose.Schema

const coinSchema = new Schema({
    title: {type:String, required:true},
    ticker: {type:String, required:true},

    voters: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'   //points to the user model
        }
    ]
})


//GraphQL parser will allow variables to store functions and that is very powerfull when merging data

module.exports = mongoose.model('Coin', coinSchema)