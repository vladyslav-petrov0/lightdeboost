import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Input from "../Input/Input";
import FormButton from "../FormButton/FormButton";
import FormClue from "../FormClue/FormClue";

import './SubscribeForm.scss';
import warning from "react-redux/lib/utils/warning";
import classNames from "classnames";

const requestSuccessClue = {
    text: 'Check your email, please',
    appearance: 'success',
};
const requestErrorClue = {
    text: 'Service is not working temporary, please try again a bit later',
    appearance: 'failure',
};
const warningClue = {
    text: 'Please enter a valid email address',
    appearance: 'warning',
};
const textIsOkClue = {
    text: 'It is ok!',
    appearance: 'ok'
};

const SubscribeForm = () => {
    const [ value, setValue ] = useState('');
    const [ clue, setClue ] = useState(null);

    const sendData = (data) => {
        const params = { method: 'POST', body: data };

        fetch('http://ptsv2.com/t/8qlsl-1627297850/post', params)
            .then(res => {
                if (res.ok) {
                    setClue(requestSuccessClue);
                    setValue('');
                };
            })
            .catch(err => setClue(requestErrorClue));
    };

    const validEmail = (email) => {
        const regExp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+([.][A-Z]{2,4})+$/i;
        return regExp.test(email);
    };

    const onSubmit = (e) => {
        if (validEmail(value)) {
            sendData(value);
        };

        e.preventDefault();
    }

    const onInput = ({ target: { value } }) => {
        let clue = validEmail(value) ? textIsOkClue : warningClue;
        if (value.length === 0) {
            clue = null;
        }

        setClue(clue);
        setValue(value);
    };

    const inputParams = {
        className: "subscribe-form__input",
        onInput,
        maxLength: 40,
        minLength: 5,
        required: true,
        autoComplete: "on",
        type: "email",
        placeholder: "Your email",
    };
    const inputContainerClasses = classNames('subscribe-form__input-container',
        [clue?.appearance ? clue.appearance : '']);

    return (
        <form className="subscribe-form" onSubmit={onSubmit}>
            <div className={inputContainerClasses}>
                <Input {...inputParams}>
                    { value }
                </Input>

                { clue &&
                <FormClue className="subscribe-form__clue">
                    { clue.text }
                </FormClue> }
            </div>

            <FormButton className="subscribe-form__btn">
                Subscribe
            </FormButton>
        </form>
    );
}

export default SubscribeForm;