import React from 'react';

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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
        <FormControl className={classes.rowStyle} noValidate autoComplete="off">
            <TextField 
                id="outlined-basic" 
                label={props.label} 
                variant="outlined"
                onChange={(e) => props.onAmountChanged(e.target.value)}
                value={props.selectedAmountValue}
            />
            { props.isReduced ? 
                "" : 
                <Select 
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={props.onCurrencyChanged}
                    value={props.selectedCurrencyValue}
                >  
                    {props.currencies.map(element => {
                        const elementTitle = element.title;
                        return(
                            <MenuItem value={elementTitle}>{elementTitle}</MenuItem>
                        )
                    })}
                </Select>
            }
        </FormControl>
        
        
    );
}

export default CurrencyRow;
