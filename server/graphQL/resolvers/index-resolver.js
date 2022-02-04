const coinResolver = require('./coin-resolver')
const userResolver = require('./auth-resolver')
const votesResolver = require('./votes-resolver')

// console.log(coinResolver)

//the names of the resolvers must be unique, and don't clash, they will be used in graphQl Schema

const rootResolver ={
    ...userResolver,
    ...coinResolver,
    ...votesResolver
}

module.exports = rootResolver