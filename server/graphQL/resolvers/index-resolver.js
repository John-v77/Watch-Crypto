const coinResolver = require('./coin-resolver')

// console.log(coinResolver)

//the names of the resolvers must be unique, and don't clash, they will be used in graphQl Schema

const rootResolver ={
    ...coinResolver
}

module.exports = rootResolver