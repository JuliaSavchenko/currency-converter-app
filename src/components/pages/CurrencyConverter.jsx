import React from 'react';
import CurrencyRow from '../CurrencyRow';

export default function CurrencyConverter() {

    return (
        <>
            <h2>Convert</h2>
            <CurrencyRow label='From'/>
            <CurrencyRow label='To'/>
        </>
    )
} 
