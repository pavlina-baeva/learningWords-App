import React from "react";
import './Input.css'

function Input(props) {
    const { value, setValue, errorMessage } = props;
    const className = errorMessage ? 'error' : '';
    return (
        <span>
        <input className={className} value={value} onChange={setValue} />
        <span className='errorMessage'>{errorMessage}</span>
        </span>
    )
}

export default Input;