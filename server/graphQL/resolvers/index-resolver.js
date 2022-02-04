const coinResolver = require('./coin-resolver')
const userResolver = require('./auth-resolver')

// console.log(coinResolver)

//the names of the resolvers must be unique, and don't clash, they will be used in graphQl Schema

const rootResolver ={
    ...userResolver,
    ...coinResolver
}

module.exports = rootResolver