import React from 'react';
import BaseButton from "../BaseButton/BaseButton";

const Button = ({ children, ...otherProps }) => {
    return (
        <BaseButton {...otherProps}>
            <button>{ children }</button>
        </BaseButton>
    )
}

export default Button;