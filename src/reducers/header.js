const headerReducer = (state, action) => {
    if (state === undefined) {
        return {
            burgerMenuIsActive: false,
        }
    }

    switch (action.type) {

        case 'UPDATE_MENU-STATUS':
            return {
                burgerMenuIsActive: action.payload,
            }

        default:
            return state.header
    }
}

export default headerReducer;