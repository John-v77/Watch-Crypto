const {buildSchema} = require('graphql')

module.exports = buildSchema(`

    type Vote {
        _id: ID!
        votes: Int!
        users: [String!]
    }

    type Coin{
        _id:    ID!
        title:  String!
        ticker: String!
        voters: [String!]
        votes: Int
    }


    type User{
        _id:        ID!
        email:      String!
        password:   String
        userName:   String!
    }


    type AuthData{
        userId:             ID!
        userName:           String!
        email:              String!
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
        userName:   String!
    }
    

    type RootQuery {
        login(email: String!, password: String!): AuthData!
        coins:[Coin!]!
        fetchVotes:[Vote!]!
    }

    type RootMutation{
        createUser(userInput: UserInput): User
        addCoin(coinInput: CoinInput): Coin
        voteCoin(coinId: String!, userId: String!): Coin!
        votedCoin(coinId: String!, userId: String!): Vote!
        removeVote(coinId: String!, userId: String!): Coin!
    }

    schema{
        query:      RootQuery
        mutation:   RootMutation
    }

`)