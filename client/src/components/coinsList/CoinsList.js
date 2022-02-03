import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CoinInfo from '../coinInfo/CoinInfo';
import './coinsList.css'


function CoinsList(props) {

    const [coinsList, setCoinList] = useState([])
    const listZ = ['BTC', 'ETH', 'DOGE']

    // send Api Request
    const getData =(ticker)=>{
        axios.get(`https://api.coinbase.com/v2/prices/${ticker}-USD/spot`)
            .then(res => {
                console.log(res.data.data, 'res**************')
                setCoinList((curr) => [...curr, res.data.data])
            })
            .catch((err) => console.log(err))
    }

    // get all data
    const retrieveData =()=>{
        //resets the coinList
        setCoinList([])
        listZ.forEach(el => getData(el))
        }



    useEffect(() => {
        let isMounted = true
        retrieveData()
        return(()=> isMounted = false)

    }, [])


    const displayData =()=>{

        if(!coinsList) return null

        return coinsList.map((each, index) => {
            return(
                <CoinInfo key={index} info={each}/>
            )
        })
    }

    console.log(coinsList, 'res**************')

    return (
        <div className='coins__page'>
            <h2>Crypto Live Price Tracker</h2>
            <div className='list_ofCoins'>
                {displayData()}
            </div>
        </div>
    );
}

export default CoinsList;