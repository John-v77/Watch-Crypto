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

    loginUserQuery: async (data)=> {
        return{
            query:`
                query Login(@email: String!, @password: String!){
                    login(email, password){
                        userId
                        userName
                        email
                        token
                        tokenExpiration
                    }
                }
            `,
            variables:{
                email:data.email,
                password:data.password
            }
        }
    }



}

export default querieGraphQL