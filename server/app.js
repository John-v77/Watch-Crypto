const express = require('express')


require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const {graphqlHTTP} = require('express-graphql')

const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

//import modules
const graphqlSchema = require(`./graphQL/schema`)
const graphqlResolvers = require('./graphQL/resolvers/index-resolver')

// console.log('graphqlSchema', graphqlSchema)

const app = express()
app.use(bodyParser.json())


//GraphQl --
app.use('./graphql', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true
}))


//conection to Mongo DB
mongoose.connect(MONGO_URI)
        .then(console.log(`connected to database`), _=> app.listen(PORT))
        .catch(err => {console.log(err)})


app.get('/', (req, res, next) => {
    res.send('Hello World!')
})
