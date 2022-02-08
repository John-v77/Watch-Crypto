const  querieGraphQL = {
    
    // fetch all coins
    fetchAllCoins: {
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

}

export default querieGraphQL