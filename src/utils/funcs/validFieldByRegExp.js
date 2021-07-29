import {emailRegExp} from "../../mocks/regExp";

const validFieldByRegExp = (field, regExp) => regExp.test(field);

export const validEmail = (field) => validFieldByRegExp(field, emailRegExp);