const mongoose = require('mongoose')

const Schema = mongoose.Schema


const votesSchema = new Schema(
    {
        coin:{
            type: Schema.Types.ObjectId, 
            ref: 'Coin'
        },
        user:{
            type: Schema.Types.ObjectId, 
            ref: 'User'
        }

    }
)

module.exports = mongoose.model('Vote', votesSchema)