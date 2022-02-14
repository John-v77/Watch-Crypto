import axios from "axios"
import CoinInfo from "../components/auxiliars/coinInfo/CoinInfo.js"
import queriesQL from './queriesQL.js'

const coinBase_Url = process.env.REACT_APP_LINK

//database url
const baseURL = "http://localhost:5000/graphql"

// axios headers
const headers = {
    "content-type" : "application/json",
    "Authorization" : "<token>"
}

//basical ojs to send with axios
const axiosReq = {
    url: baseURL,
    method: 'post',
    headers: headers,
    data: null
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
            ...axiosReq,
            data: queriesQL.fetchAllCoinsQuery
        })
        return res
    },

    loginUser: async(userInfo)=>{
        let res = await axios({
            ...axiosReq,
            data: queriesQL.loginUserQuery(userInfo)
        })
        return res
    },

    registerUser: async(userCreated)=>{
        let res = await axios({
            ...axiosReq,
            data: queriesQL.CreatUserMutation(userCreated)
        })

        return res
    },

    voteCoin: async(coinId, userId, token)=>{
        let query = queriesQL.VoteCoinsMutation(coinId, userId)
        let header = {
            "content-type":"application/json",
            "Authorization": 'Bearer ' + token
        }

        let res = await axios({
            ...axiosReq,
            headers: header,
            data: query
        })
        return res
    },

    removeVoteCoin: async(coinId, userId, token)=>{
        let query = queriesQL.RemoveVoteCoinsMutation(coinId, userId)
        let header = {
            "content-type":"application/json",
            "Authorization": 'Bearer ' + token
        }

        let res = await axios({
            ...axiosReq,
            headers: header,
            data: query
        })
        return res
    }
}
export default actions