import CurrencyRow from '../CurrencyRow';
import React, { useState, useEffect } from 'react';
import getCurrencyRateAsync from "../../requests"

export default function CurrencyConverter() {

    const [selectedCurrencyTo, setSelectedCurrencyTo] = useState('');
    const [currencies, setCurrencies] = useState([]);
    const [usdCurrencyAmount, setUsdCurrency] = useState(0);
    const [secondCurrencyAmount, setSecondCurrencyAmount] = useState(0);

    useEffect(() => {
        getCurrencyRateAsync().then(currencies => setCurrencies(currencies.map(currency => {
            currency.title = currency.title.slice(3);
            return currency;
        })));
    }, []);

    const onHandleChange = (value, isUSD = false) => {
        if (isUSD) {
            setUsdCurrency(value);
            const currencyTO = currencies.filter(currency => currency.title === selectedCurrencyTo);
            if (currencyTO.length > 0) {
                const rate = currencyTO[0].value;
                setSecondCurrencyAmount(value * rate);
            }
        }
    };

    return (
        <>
            <h2>Convert</h2>
            <CurrencyRow currencies={currencies} 
                         label='USD' 
                         selectedAmountValue={usdCurrencyAmount}
                         isReduced={true} 
                         onAmountChanged={(value) => onHandleChange(value, true)} />
            <CurrencyRow currencies={currencies} 
                         selectedCurrencyValue={selectedCurrencyTo}
                         selectedAmountValue={secondCurrencyAmount}
                         onAmountChanged={onHandleChange} 
                         onCurrencyChanged={(e) => setSelectedCurrencyTo(e.target.value)}/>
        </>
    )
} 
