import { urlRegExp } from "../../mocks/regExp";

export const divideUrl = (route) => route.match(urlRegExp);
