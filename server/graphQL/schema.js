const {buildSchema} = require('graphql')

module.exports = buildSchema(`

    type Coin{
        _id:    ID!
        title:  String!
        ticker: String!
    }




    type User{
        _id:        ID!
        email:      String!
        password:   String
    }


    type AuthData{
        userId:             ID!
        token:              String!
        tokenExpiration :   Int!
    }


    input CoinInput{
        title:  String!
        ticker: String!
    }


    input UserInput{
        email:      String!
        password:   String!
    }
    

    type RootQuery {
        login(email: String!, password: String!): AuthData!
        coins:[Coin!]!
    }

    type RootMutation{
        createUser(userInput: UserInput): User
        addCoin(coinInput: CoinInput): Coin
    }

    schema{
        query:      RootQuery
        mutation:   RootMutation
    }

`)