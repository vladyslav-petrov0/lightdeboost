import React from 'react';
import BaseButton from "../BaseButton/BaseButton";

const FormButton = ({ children, ...otherProps }) => {
    return (
        <BaseButton {...otherProps}>
            <button>{ children }</button>
        </BaseButton>
    )
}

export default FormButton;