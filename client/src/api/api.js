import axios from "axios"
import queriesQL from './queriesQL.js'

const coinBase_Url = process.env.REACT_APP_LINK
const baseURL = "http://localhost:5000/graphql"

const headers = {
    "content-type" : "application/json",
    "Authorization" : "<token>"
}


const actions ={

    // get Crypto prices from Coinbase
    getCryptoData : async (ticker)=>{
        let res = axios.get(`https://api.coinbase.com/v2/prices/${ticker}-USD/spot`)
        return res
    },

    // fetch all the coins from Database
    getCoinsFromDB : async()=>{
        let res = await axios({
            url: baseURL,
            method: 'post',
            headers: headers,
            data: queriesQL.fetchAllCoinsQuery
        })
        return res
    },

    loginUser: async(userInfo)=>{

        let query = queriesQL.loginUserQuery(userInfo)
        console.log(query)
        let res = await axios({
            url:baseURL, 
            method:'post',
            headers: headers,
            data:query
        })
        return res
    },

    

}


export default actions