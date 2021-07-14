export const changeCurrentIntroId = (id) => {
    return {
        type: 'UPDATE_INTRO-ID',
        payload: id
    }
};

const introItemListLoaded = (itemList) => {
    return {
        type: 'FETCH_INTRO-ITEMS_SUCCESS',
        payload: itemList
    }
};

const introItemListFailed = (error) => {
    return {
        type: 'FETCH_INTRO-ITEMS_FAILURE',
        payload: error
    }
};

const introItemListRequest = () => {
    return {
        type: 'FETCH_INTRO-ITEMS_REQUEST',
    }
}

export const fetchIntroItemList = (service, dispatch) => {
    introItemListRequest();
    service.getIntroItemList()
        .then(data => {
            dispatch(introItemListLoaded(data))
        })
        .catch(error => introItemListFailed(error));
};