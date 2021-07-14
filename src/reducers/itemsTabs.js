const initialState = {
    tabsHeaders: [],
    itemList: [],
    loading: null,
    error: null,
}

const itemsTabsReducer = (state, action) => {
    if (state === undefined) {
        return initialState;
    }

    switch (action.type) {

        case 'FETCH_ITEMS-TABS-HEADERS_REQUEST':
            return {
                tabsHeaders: [],
                itemList: [],
                loading: true,
                error: false
            }

        case 'FETCH_ITEMS-TABS-HEADERS_SUCCESS':
            return {
                tabsHeaders: action.payload,
                itemList: state.itemsTabs.itemList,
                loading: false,
                error: false
            }

        case 'FETCH_ITEMS-TABS-HEADERS_FAILURE':
            return {
                tabsHeaders: [],
                itemList: [],
                loading: false,
                error: true
            }

        case 'FETCH_ITEMS-TABS-CONTENT-SUCCESS':
            return {
                tabsHeaders: state.itemsTabs.tabsHeaders,
                itemList: action.payload,
                loading: false,
                error: false
            }

        default:
            return state.itemsTabs;
    }
};

export default itemsTabsReducer;