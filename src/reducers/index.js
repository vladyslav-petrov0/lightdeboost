import introReducer from "./intro.js";
import headerReducer from "./header.js";

const reducer = (state, action) => {
  return {
    header: headerReducer(state, action),
    intro: introReducer(state, action),
  };
};

export default reducer;
