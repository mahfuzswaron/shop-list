import { ActionTypes } from "../Constants/action-types"

export const setShops = (shops) => {
    return {
        type: ActionTypes.SET_SHOPS,
        payload: shops
    }
}
export const addShop = (shop) => {
    return {
        type: ActionTypes.ADD_SHOP,
        payload: shop
    }
}

export const editShop = (shop) => {
    return {
        type: ActionTypes.EDIT_SHOP,
        payload: shop
    }
}
export const deleteShop = (shop) => {
    return {
        type: ActionTypes.DELETE_SHOP,
        payload: shop
    }
}
export const selectShop = (shop) => {
    return { type: "SELECT_SHOP", payload: shop }
}