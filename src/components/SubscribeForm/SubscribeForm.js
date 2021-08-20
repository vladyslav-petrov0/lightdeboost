import React, { useState } from "react";
import classNames from "classnames";

import Form from "../Form/Form";
import InputContainer from "../InputContainer/InputContainer";
import Input from "../Input/Input";
import Button from "../UI/Button/Button";
import InputClue from "../InputClue/InputClue";

import {
  requestSuccessClue,
  requestErrorClue,
  textIsOkClue,
  warningClue,
} from "../../mocks/formClue";

import { validEmail } from "../../utils/funcs/validFieldByRegExp";

import "./SubscribeForm.scss";
// при 3 попытке отправки высветлить подсказку, что слишком частые попытки.

const SubscribeForm = ({ className }) => {
  const [value, setValue] = useState("");
  const [clue, setClue] = useState(null);

  const classes = classNames("SubscribeForm", [`${className}`]);

  const sendData = (data) => {
    const params = { method: "POST", body: data };

    fetch("http://ptsv2.com/t/8qlsl-1627297850/post", params)
      .then((res) => {
        if (res.ok) {
          setClue(requestSuccessClue);
          setValue("");
        }
      })
      .catch((err) => setClue(requestErrorClue));
  };

  const onSubmit = (e) => {
    if (validEmail(value)) {
      sendData(value);
    }

    e.preventDefault();
  };

  const onInput = ({ target: { value } }) => {
    let clue = validEmail(value) ? textIsOkClue : warningClue;
    if (value.length === 0) {
      clue = null;
    }

    setClue(clue);
    setValue(value);
  };

  const inputParams = {
    className: "SubscribeFormInput",
    onInput,
    maxLength: 40,
    minLength: 5,
    required: true,
    autoComplete: "on",
    type: "email",
    placeholder: "Your email",
  };

  return (
    <Form className={classes} onSubmit={onSubmit}>
      <InputContainer className={clue?.appearance}>
        <Input {...inputParams}>{value}</Input>

        {clue && (
          <InputClue className="SubscribeFormClue">{clue.text}</InputClue>
        )}
      </InputContainer>

      <Button className="SubscribeFormButton">Subscribe</Button>
    </Form>
  );
};

SubscribeForm.defaultProps = {
  className: "",
};

export default SubscribeForm;
