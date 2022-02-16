const express = require('express')
const bodyParser = require('body-parser')
const {graphqlHTTP} = require('express-graphql')
const mongoose = require('mongoose')

const graphQLSchema = require('./graphQL/schemaGraphQL')
const graphQLResolvers = require('./graphQL/resolvers/index-resolver')
// const isAuth = require('./midleware/is-auth')



require('dotenv').config()
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGODB_URI

const app = express()


const isAuth = require('./graphQL/middleware/is-auth')

//cors
// const cors = require('cors')
// app.use(
//     cors({
//         credentials:true,
//         origin: ["http://localhost:3000"]  // client url
//     })
// )

//handle CORS error 
app.use((req, res, next) => {
    console.log(req.body, '*body*')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    if(req.method === 'OPTIONS'){ return res.sendStatus(200)}
    next()
})


app.use(bodyParser.json())

//will pass this function without executing, for express to execute
// app.use(isAuth)


app.use(isAuth)   // protected routes middleware


app.use('/graphql', graphqlHTTP({
    // /the below schema is in a string
    schema: graphQLSchema,
    rootValue: graphQLResolvers,
    graphiql: true
}))

mongoose.connect(MONGO_URI)
.then( _=> app.listen(PORT), console.log(`connected to dataBase port ${PORT}`))
.catch(err => {console.log(err)})