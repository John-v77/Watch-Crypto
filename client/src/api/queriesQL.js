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



}

export default querieGraphQL