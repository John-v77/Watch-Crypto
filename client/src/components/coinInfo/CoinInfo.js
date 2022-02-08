import React, { useEffect, useState } from 'react';
import actions from '../../api/api';
import './coinInfo.css'

function CoinInfo(props) {
    const {info} = props
    const ticker = info.ticker

    const [coinPrice, setCoinPrice] = useState(0)

    // load on mounting
    useEffect(() => {
        let isMounted = true
        getData(ticker)
        return(()=> isMounted = false)

    }, [])
    

    // send Api Request
    const getData =(ticker)=>{

        actions.getCryptoData(ticker)
                .then(res => {
                    setCoinPrice(res.data.data.amount)
                })
                .catch((err) => console.log(err))
    }


    return (
        <div className='coin_card'>
            <div className='coin_card__left'>
                <h3>{info.title}</h3>
                <h4>${coinPrice}</h4>
            </div>
            <div className='coin_card__right'>
                <h3>{info.votes}</h3>
                <h3 className='hearth'>❤</h3>
            </div>
        </div>
    );
}

export default CoinInfo;