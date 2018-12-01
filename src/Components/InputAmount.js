/**
 * Summary: Contains Input for Amount
 */
import React from 'react';

function InputAmount(props) {
    return (
        <div className="amount-main">
            <form onSubmit={props.getDenomination}>
                <h3>Welcome to ATM</h3>
                <label>Enter the Amount</label>
                <input type="text" onChange={props.onAmountChange} className="amount" />
                <button className="get-money" type="submit" >Submit</button>
            </form>
        </div>
    )
}

export default InputAmount; 