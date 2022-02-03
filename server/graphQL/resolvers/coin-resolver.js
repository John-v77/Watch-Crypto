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
        try{

            const newCoin = new Coin({
                title: args.coinInput.title,
                ticker: args.coinInput.ticker
            })

        }catch(err){throw err}
    }

module.exports ={
    coins,
    addCoin
}