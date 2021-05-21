import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    table: {
      minWidth: '650px',
      margin: '0 auto',
      alignContent: 'center',
    },
});

export default function CurrencyRate() {

    const classes = useStyles(); 
    const [currencyArr, setCurrencyArr] = useState([]); 
    
    const getCurrencyRateAsync = async () => {
        return await axios.get('http://api.currencylayer.com/live?access_key=a256b8f5219f97e08aade5d8295df0bc&currencies=AUD,EUR,GBP,PLN')
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

    
    useEffect(() => {
        const intervalId = setInterval(() => {
            getCurrencyRateAsync().then(currencies => setCurrencyArr(currencies));
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        
        <TableContainer>
            <Table className={classes.table} size='small' aria-label='a dense table'>
                <TableBody>
                    { currencyArr.map(elem => {
                        return (<TableRow className='currency-wrapper' key={elem.value}>
                            <TableCell className='currency-title'>{elem.title}</TableCell>
                            <TableCell className='currency-value'>{elem.value}</TableCell>
                        </TableRow>)
                    }) }
                </TableBody>
            </Table>
        </TableContainer>
        
    )
} 