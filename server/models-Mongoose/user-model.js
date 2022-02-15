const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {type:String, required:true},
    password: {type:String, required:true},
    userName: {type:String, required:true},
    votes: [                                            //relational field
        {
            type: Schema.Types.ObjectId,
            ref: 'Coin'                                 // points to the coin model
        }
    ]
})

module.exports = mongoose.model('User', userSchema)