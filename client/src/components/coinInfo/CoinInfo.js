import React from 'react';
import './coinInfo.css'

function CoinInfo(props) {
    const {info} = props

    return (
        <div className='coin_card'>
            <div className='coin_card__left'>
                <h3>{info.base}</h3>
                <h4>${info.amount}</h4>
            </div>
            <div className='coin_card__right'>
                <h3>21</h3>
                <h3 className='hearth'>❤</h3>
            </div>
        </div>
    );
}

export default CoinInfo;