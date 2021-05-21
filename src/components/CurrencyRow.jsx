import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    rowStyle: {
        fontSize: '16px',
        padding: '10px 12px',
        
    },
});

const CurrencyRow = (props) => {

    const classes = useStyles();

    return (
        
        <form className={classes.rowStyle} noValidate autoComplete="off">
            <TextField id="outlined-basic" label={props.label} variant="outlined" />
        </form>
        
        
    );
}

export default CurrencyRow;
