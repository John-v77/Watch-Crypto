const Vote = require('../../models-Mongoose/votes-model')
// const User = require('../../models-Mongoose/user-model')
const Coin = require('../../models-Mongoose/coin-model')


//get all the votes
const fetchVotes = async _=> {
        try{
             const coins = await Coin.find()
             return coins
        }catch(err){throw err}
    }
 
// vote coin
const votedCoin = async ({coinId, userId})=>{
        try{

            // guard Clause .. one vote per user
            const hasVoted = await Vote.findOne({user:userId})
            if(!hasVoted) throw new Error("User have already voted")
            console.log(hasVoted)


            // find the proper coin
            const coin = await Coin.findOne({_id: coinId})

            
            
            // add the vote
            const voteZ = new Vote({
                user: "61fc8ebde553a8c11523066a",
                coin: coin
            })
            result = await voteZ.save()


            //count the votes
            const votes = await Vote.count({coin: coinId})

            return {...result._doc,
                    _id:result.id,
                    votes: votes
                    }


        }catch(err){throw err}
}


// delete vote for the coin
const removeVote = async _=>{
    try{
        
    }catch(err){throw err}
}



module.exports = {
    fetchVotes,
    votedCoin,
    removeVote
}