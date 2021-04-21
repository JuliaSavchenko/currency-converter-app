import React, { useState } from 'react';
import axios from 'axios';


export default function CurrencyRate() {

    const [currencyArr, setCurrencyArr] = useState([]); 

    const getCurrencyRate = async () => {
        await axios.get('http://api.currencylayer.com/live?access_key=a256b8f5219f97e08aade5d8295df0bc&currencies=AUD,EUR,GBP,PLN')
        .then(response => {
            let quotes = response.data.quotes;
            let result = [];
            for (const key in quotes) {
                if (Object.hasOwnProperty.call(quotes, key)) {
                    const element = quotes[key];
                    result.push({
                        title: key,
                        value: element
                    })
                }
            }
            
            setCurrencyArr(result);
        });
    };

    setInterval(getCurrencyRate, 30000);

    return (
        
        <div className='currency-table'>
            { currencyArr.map(elem => {
                return (<div>
                    <div>{elem.title}</div>
                    <div>{elem.value}</div>
                </div>)
            }) }
        </div>
    )
} 