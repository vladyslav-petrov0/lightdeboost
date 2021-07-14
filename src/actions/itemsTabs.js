const headersRequest = () => {
    return {
        type: 'FETCH_ITEMS-TABS-HEADERS_REQUEST'
    }
};

const headersLoaded = (items) => {
    return {
        type: 'FETCH_ITEMS-TABS-HEADERS_SUCCESS',
        payload: items,
    }
};

const headersError = () => {
    return {
        type: 'FETCH_ITEMS-TABS-HEADERS_FAILURE',
    }
};

export const fetchItemsTabsHeaders = (service, dispatch) => {
    headersRequest();
    service.getItemTabsHeaders()
        .then(data => dispatch(headersLoaded(data)))
        .catch(error => headersError());
};

const itemListLoaded = (data) => {
    return {
        type: 'FETCH_ITEMS-TABS-CONTENT-SUCCESS',
        payload: data,
    };
}

export const fetchItemsTabsContent = (service, dispatch, idx, itemId, length) => {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push([{}]);
    }

    service.getItemTabsContent(itemId)
        .then(data => {
            arr[idx] = data;
            dispatch(itemListLoaded(arr))
        });
}