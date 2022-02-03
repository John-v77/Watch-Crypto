const express = require('express')


require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const graphqlHttp = require('express-graphql')

const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

//import modules
const graphqlSchema = require(`./graphQL/schema`)

const app = express()
app.use(bodyParser.json())

//conection to Mongo DB
mongoose.connect(MONGO_URI)
        .then(console.log(`connected to database`), _=> app.listen(PORT))
        .catch(err => {console.log(err)})


app.get('/', (req, res, next) => {
    res.send('Hello World!')
})
