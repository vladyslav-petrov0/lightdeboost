import { fetchIntroItemList, 
    changeCurrentIntroId } from "./intro.js";

import { fetchItemsTabsHeaders,
    fetchItemsTabsContent } from './itemsTabs.js';

export {
    fetchIntroItemList,
    changeCurrentIntroId,
    fetchItemsTabsHeaders,
    fetchItemsTabsContent
}

export const burgerMenuUpdate = (state) => {
    return {
        type: 'UPDATE_MENU-STATUS',
        payload: state
    }
}

