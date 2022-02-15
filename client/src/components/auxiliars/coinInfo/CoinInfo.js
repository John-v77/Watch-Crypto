import React, { useContext, useEffect, useState } from 'react';
import actions from '../../../api/api';
import { UserContext } from '../context';
import './coinInfo.css'

function CoinInfo(props) {
    const {info} = props
    const ticker = info.ticker

    const {user} = useContext(UserContext)

    const [coin, setCoin] = useState({
        price:0,
        id:0,
        votes:info.votes,
    })

    // load on mounting
    useEffect(() => {
        let isMounted = true

        isMounted && getData(ticker)
        return(()=> isMounted = false)
    }, [])
    

    // send Api Request
    const getData =(ticker)=>{

        actions.getCryptoData(ticker)
                .then(res => {
                    setCoin(
                        {...coin, 
                            price : res.data.data.amount,
                            id: info._id}
                        )
                })
                .catch((err) => console.log(err))
    }


    //submit votes
    const submitVote=()=>{
        console.log('voting')
        actions.voteCoin(coin.id, user.id, user.token)
                .then(res =>{
                    console.log(res, 'voting res')
                    setCoin({...coin, votes: res.data.data.voteCoin.votes})
                })
                .catch((err) =>{console.log(err)})
    }


    return (
        <div className='coin_card'>
            <div className='coin_card__left'>
                <h3>{info.title}</h3>
                <h4>${coin.price}</h4>
            </div>
           {user.token &&
                <div className='coin_card__right'>
                <h3>{ coin.votes }</h3>
                <button onClick={submitVote} className='hearth_btn'>❤</button>
            </div>}
        </div>
    );
}

export default CoinInfo;