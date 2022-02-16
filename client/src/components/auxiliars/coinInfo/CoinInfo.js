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
        votes:  info.votes,
        voted:  user.votes.includes(ticker)
    })

    const [livePrice, setLivePrice] = useState(0)

    // load on mounting
    useEffect(() => {
        let isMounted = true

        isMounted && getData(ticker)
        
        return(()=> isMounted = false)
    }, [])
    

    // send Api Request
    const getData =(ticker)=>{
        console.log('getting data')
        actions.getCryptoData(ticker)
                .then(res => {
                    setCoin(
                        {
                            price : res.data.data.amount,
                            id: info._id}
                        )
                })
                .catch((err) => console.log(err))
    }



    //get live data
    const getLiveData =(ticker)=>{
        console.log('getting data')
        actions.getCryptoData(ticker)
                .then(res => {
                    setLivePrice(res.data.data.amount)
                })
                .catch((err) => console.log(err))
    }




    //submit votes
    const submitVote= async ()=>{

        setCoin({...coin, voted: !coin.voted})
        coin.voted ?
            await addVote() :
            await deleteVote()


    }


    //add vote
    const addVote=()=>{
        console.log('voting')
        actions.voteCoin(coin.id, user.id, user.token)
                .then(res =>{
                    console.log(res, 'voting res')
                    setCoin({...coin, votes: res.data.data.voteCoin.votes})
                })
                .catch((err) =>{console.log(err)})
        return
    }


    //delete vote
    const deleteVote=()=>{
        console.log('un-voting')
        actions.removeVoteCoin(coin.id, user.id, user.token)
                .then(res =>{
                    console.log(res, 'voting res')
                    setCoin({...coin, votes: res.data.data.voteCoin.votes})
                })
                .catch((err) =>{console.log(err)})
        return
    }


    // set continous update.





    return (
        <div className='coin_card'>
            <div className='coin_card__left'>
                <h3>{info.title}</h3>
                <h4>${coin.price}</h4>
            </div>
           {user.token &&
                <div className='coin_card__right'>
                <p>{ info.votes }</p>
                <button onClick={submitVote} className='hearth_btn'>
                {coin.voted ? '❤' : '♡'}</button>
            </div>}
        </div>
    );
}

export default CoinInfo;