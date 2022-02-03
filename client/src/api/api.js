import axios from "axios"

const coinBase_Url = process.env.REACT_APP_LINK
const baseURL = "http://localhost:5000"


const actions ={

    fetchCoinsData: async()=>{
       let coinsResults = await axios.get(coinBase_Url)
       return coinsResults
    },

}