import introReducer from "./intro.js";
import headerReducer from "./header.js";
import shopReducer from "./shop.js";

const reducer = (state, action) => {
  return {
    header: headerReducer(state, action),
    intro: introReducer(state, action),
    shop: shopReducer(state, action),
  };
};

export default reducer;
