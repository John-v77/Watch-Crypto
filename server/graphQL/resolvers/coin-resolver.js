const Coin = require('../../models/coin-model')

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
            ticker: args.coinInput.ticker
        })
        try{

            const result = await newCoin.save()  //.save() is provide by mongoose
            return result
        }catch(err){throw err}
    }

module.exports ={
    coins,
    addCoin
}