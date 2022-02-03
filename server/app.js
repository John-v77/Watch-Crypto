const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI



//conection to Mongo DB
mongoose.connect(MONGO_URI)
        .then(console.log(`connected to database`), _=> app.listen(PORT))
        .catch(err => {console.log(err)})

        
app.get('/', (req, res, next) => {
    res.send('Hello World!')
})
