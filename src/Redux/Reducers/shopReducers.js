import { ActionTypes } from "../Constants/action-types";
const initialState = {
    shops: [
        {
            "id": "shop1",
            "name": "Ahmed's Grocery",
            "category": "grocery",
            "area": "Ahmedabad",
            "openingTime": "10:00 AM",
            "closingTime": "9:00 PM"
        },
        {
            "id": "shop2",
            "name": "Mahfuz's Store",
            "category": "Stationary",
            "area": "Ahmedabad",
            "openingTime": "10:00 AM",
            "closingTime": "9:00 PM"
        },
        {
            "id": "shop3",
            "name": "Ibrahim's Shop",
            "category": "chemist",
            "area": "Ahmedabad",
            "openingTime": "10:00 AM",
            "closingTime": "9:00 PM"
        }
    ],
    selectedShop: []
}

const addShop = (state, shop) => {
    const lastIndex = state.shops.length - 1;
    const lastId = state.shops[lastIndex].id;
    const newId = `shop${parseInt(lastId.slice(4)) + 1}`
    const newShop = { id: newId, ...shop };
    const preShops = state.shops;
    const newShops = [...preShops, newShop]
    return { shops: newShops, selectedShop: state.selectedShop }
}
const editShop = (state, shop) => {
    const updatedShops = state.shops.filter(s => s.id !== shop.id);
    updatedShops.unshift(shop);
    return { shops: updatedShops }
}
const deleteShop = (state, shop) => {
    const updatedShops = state.shops.filter(s => s.id !== shop.id);
    return { shops: updatedShops }
}

export const shopReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ActionTypes.SET_SHOPS:
            return state;
        case ActionTypes.ADD_SHOP:
            return addShop(state, payload);
        case ActionTypes.EDIT_SHOP:
            return editShop(state, payload);
        case ActionTypes.DELETE_SHOP:
            return deleteShop(state, payload)
        default:
            return state;
    }
}

export const selectedShopReducer = (state = {}, { type, payload }) => ({ state: payload })