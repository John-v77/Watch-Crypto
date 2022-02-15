import React, { useEffect, useState } from 'react';
import CoinInfo from '../../auxiliars/coinInfo/CoinInfo';
import actions from '../../../api/api';
import './coinsList.css'


function CoinsList(props) {
    
    const [coinsList, setCoinList] = useState([])

    
    // retrieve coins from database
    const getCoins = ()=>{
        actions.getCoinsFromDB()
            .then(res =>{
    
                setCoinList(res.data.data.coins)
            })
            .catch(err => console.log(err))
    }

    // load on mounting
    useEffect(() => {
        let isMounted = true
        isMounted && getCoins()
        return(()=> isMounted = false)

    }, [])


    // display data
    const displayData =()=>{

        if(!coinsList) return null

        return coinsList.map((each, index) => {
            return(
                <CoinInfo key={index} info={each}/>
            )
        })
    }

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