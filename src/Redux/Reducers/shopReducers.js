import { ActionTypes } from "../Constants/action-types";
const initialState = {
    shops: [
        {
            "id": "shop1",
            "name": "Ahmed's Grocery",
            "category": "grocery",
            "area": "Ahmedabad",
            "opening": "10:00 am",
            "closing": "9:00 pm"
        },
        {
            "id": "shop2",
            "name": "Mahfuz's Store",
            "category": "Stationary",
            "area": "Ahmedabad",
            "opening": "10:00 am",
            "closing": "9:00 pm"
        },
        {
            "id": "shop3",
            "name": "Ibrahim's Shop",
            "category": "Electronic",
            "area": "Ahmedabad",
            "opening": "10:00 am",
            "closing": "9:00 pm"
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
    const shopId = shop.id;
    // console.log(shop)
    const mathchedShop = state.shops.find(s => s.id === shopId);
    console.log("matched", mathchedShop)
    const updatedShops = [...state.shops];
    updatedShops.pop(mathchedShop);
    console.log(updatedShops);
    updatedShops.unshift(shop);
    return { shops: updatedShops }
    // return state

}

export const shopReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ActionTypes.SET_SHOPS:
            return state;
        case ActionTypes.ADD_SHOP:
            return addShop(state, payload);
        case ActionTypes.EDIT_SHOP:
            return editShop(state, payload)
        default:
            return state;
    }
}

export const selectedShopReducer = (state = {}, { type, payload }) => ({ state: payload })