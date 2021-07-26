const updateId = (maxValue, currentId, quantity) => {
    const sum = currentId + quantity;
    return (sum > maxValue) ? 0 : (sum < 0) ? maxValue : sum;
};

const initialState = {
    loading: true,
    error: null,
    itemList: [],
    currentId: 0
}

const introReducer = (state, action) => {
    if (state === undefined) {
        return initialState;
    }
    
    switch (action.type) {

        case 'UPDATE_INTRO-ID':
            const { itemList, currentId } = state.intro;
            const maxLength = itemList.length - 1;

            return {
                loading: false,
                error: false,
                itemList: [...itemList],
                currentId: updateId(maxLength, currentId, action.payload)
            }

        case 'FETCH_INTRO-ITEMS_REQUEST':
            return {
                loading: true,
                error: false,
                itemList: [],
                currentId: 0
            }

        case 'FETCH_INTRO-ITEMS_SUCCESS':
            return {
                loading: false,
                error: false,
                itemList: action.payload,
                currentId: state.intro.currentId,
            }

        case 'FETCH_INTRO-ITEMS_FAILURE':
            return {
                loading: false,
                error: true,
                itemList: [],
                currentId: state.intro.currentId,
            }

        default:
            return state.intro;
    };
}

export default introReducer;