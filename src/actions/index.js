import { fetchIntroItemList, 
    changeCurrentIntroId } from "./intro.js";

export {
    fetchIntroItemList,
    changeCurrentIntroId,
}

export const burgerMenuUpdate = (state) => {
    return {
        type: 'UPDATE_MENU-STATUS',
        payload: state
    }
}

