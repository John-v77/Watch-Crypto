const Coin = require('../../models-Mongoose/coin-model')
const User = require('../../models-Mongoose/user-model')
    //fetch all the coins
const coins = async _=>{
    try{
        const coins = await Coin.find()
        return coins
    }catch(err){throw err}
}


// add a new Coin
const addCoin = async (args)=>{
    
    const newCoin = new Coin({
        title: args.coinInput.title,
        ticker: args.coinInput.ticker,
        votes: 0
    })
    try{

        const result = await newCoin.save()  //.save() is provide by mongoose
        return result
    }catch(err){throw err}
}


// vote coin
const voteCoin = async({coinId, userId})=>{

    // guard clause .. one vote per user
    const hasVoted = await Coin.findOne({voters:userId})
    if(hasVoted ) throw new Error("User have already voted")
    console.log(hasVoted)


    //find the right coin and update it
    try{
    let res1 = await Coin.findByIdAndUpdate(
                        {_id: coinId},                  // find the record  
                        {$set: {vote : 1}},            // increment the record      // update list of voters
                        )

    let res = await Coin.findOne({_id:coinId})
    console.log(res, "resDb")

        // update the list of votes on user side
        try{
            await User.updateOne(
                {_id: userId},
                {$push: {votes: res.ticker}}
            )
        }catch(err){throw err}


    return res
    }catch(err){throw err}

    

}   


const removeVote = async({coinId, userId})=>{

    // guard clause .. one vote per user
    const hasVoted = await Coin.findOne({voters:userId})
    if(!hasVoted ) throw new Error("User didn't vote")
    console.log(hasVoted)


    //find the right coin and update it
    try{
    let res1 = await Coin.findByIdAndUpdate(
                        {_id: coinId},                  // find the record  
                        {$int: {vote : -1}},            // increment the record
                        {$pull: {voters: userId}}      // update list of voters
                        )

    let res = await Coin.findOne({_id:coinId})
    console.log(res, "resDb")

        // update the list of votes on user side
        try{
            await User.updateOne(
                {_id: userId},
                {$pull: {votes: res.ticker}}
            )
        }catch(err){throw err}


    return res
    }catch(err){throw err}

    

}   

module.exports ={
    coins,
    addCoin,
    voteCoin,
    removeVote
}