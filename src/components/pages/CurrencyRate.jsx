import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import getCurrencyRateAsync from '../../requests'

const useStyles = makeStyles({
    table: {
      minWidth: '650px',
      margin: '0 auto',
      alignContent: 'center',
      marginTop: '20px',
    },
});

export default function CurrencyRate() {

    const classes = useStyles(); 
    const [currencyArr, setCurrencyArr] = useState([]);    
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            getCurrencyRateAsync().then(currencies => setCurrencyArr(currencies));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        
        <TableContainer>
            <Table className={classes.table} size='medium' aria-label='a dense table'>
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