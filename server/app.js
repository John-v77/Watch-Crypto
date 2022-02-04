const express = require('express')
const bodyParser = require('body-parser')
const {graphqlHTTP} = require('express-graphql')
const mongoose = require('mongoose')

const graphQLSchema = require('./graphQL/schema')
const graphQLResolvers = require('./graphQL/resolvers/index-resolver')
// const isAuth = require('./midleware/is-auth')



require('dotenv').config()
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

const app = express()

app.use(bodyParser.json())

//will pass this function without executing, for express to execute
// app.use(isAuth)
//

app.use('/graphql', graphqlHTTP({
    // /the below schema is in a string
    schema: graphQLSchema,
    rootValue: graphQLResolvers,
    graphiql: true
}))

mongoose.connect(MONGO_URI)
.then( _=> app.listen(PORT), console.log(`connected to dataBase port ${PORT}`))
.catch(err => {console.log(err)})