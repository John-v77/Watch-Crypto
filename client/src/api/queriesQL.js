const  querieGraphQL = {
    
    // fetch all coins
    fetchAllCoinsQuery: {
        query:`
            query{
                coins{
                    _id
                    ticker
                    title
                    votes
                    voters
                  }
            }
        `
    },

    loginUserQuery: (data)=> {
        return{
            query:`
                query Login($email: String!, $password: String!){
                    login(email:$email, password:$password){
                        userId
                        email
                        token
                        userName
                        tokenExpiration
                    }
                }
            `,
            variables:{
                email:data.email,
                password:data.password
            }
        }
    },

    CreatUserMutation: (data) => {
        return{
            query:`
                mutation CreateUser($userName: String!, $email: String!, $password: String!){
                    createUser(userInput:{userName:$userName, email:$email, password:$password}){
                    userName
                    email
                    _id
                    }
                }
            `,

            variables:{
                userName:   data.userName,
                email:      data.email,
                password:   data.password
            }
        }
    },

    VoteCoinsMutation: (coinId, userId) =>{

        console.log(typeof(coinId), typeof(userId), '6343')
        return{
            query:`
                mutation VotedCoin($coinIdd: String!, $userIdd: String!){
                    voteCoin(coinId:$coinIdd, userId:$userIdd){
                        votes
                    }
                }
            `,
            variables:{
                coinIdd: coinId,
                userIdd: userId
            }
        }
    },

    RemoveVoteCoinsMutation:(coinId, userId) =>{
        return{
            query:`
                mutation RemoveVote($coinIdd: String!, $userIdd: String!){
                    removeVote(coinId:$coinIdd, userId:$userIdd){
                        votes
                    }
                }
            `,
            variables:{
                coinIdd: coinId,
                userIdd: userId
            }
        }
    }



}

export default querieGraphQL