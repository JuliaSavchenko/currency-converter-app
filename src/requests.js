import axios from 'axios';

export default function getCurrencyRateAsync() {
        return axios.get('http://api.currencylayer.com/live?access_key=a256b8f5219f97e08aade5d8295df0bc&currencies=AUD,EUR,GBP,PLN')
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
            return result;
        });
    };
