export const changeCurrentIntroId = (id) => {
    return {
        type: 'UPDATE_INTRO-ID',
        payload: id
    }
};

export const introItemListLoaded = (itemList) => {
    return {
        type: 'FETCH_INTRO-ITEMS_SUCCESS',
        payload: itemList
    }
};

export const introItemListRequest = () => {
    return {
        type: 'FETCH_INTRO-ITEMS_REQUEST',
    }
}

export const burgerMenuUpdate = (state) => {
    return {
        type: 'UPDATE_MENU-STATUS',
        payload: state
    }
}