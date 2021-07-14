import introReducer from "./intro.js";
import headerReducer from "./header.js";
import itemsTabsReducer from './itemsTabs.js';

const reducer = (state, action) => {
    return {
        header: headerReducer(state, action),
        intro: introReducer(state, action),
        itemsTabs: itemsTabsReducer(state, action),
    }
};

export default reducer;