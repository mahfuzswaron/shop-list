import { ActionTypes } from "../Constants/action-types";
const initialShops = [
    {
        "id": "shop1",
        "name": "Ahmed's Grocery",
        "category": "grocery",
        "area": "Ahmednagar",
        "openingTime": "10:00 AM",
        "closingTime": "9:00 PM"
    },
    {
        "id": "shop2",
        "name": "Mahfuz's Store",
        "category": "Stationary shop",
        "area": "Ahmednagar",
        "openingTime": "10:00 AM",
        "closingTime": "9:00 PM"
    },
    {
        "id": "shop3",
        "name": "Ibrahim's Shop",
        "category": "chemist",
        "area": "Ahmednagar",
        "openingTime": "10:00 AM",
        "closingTime": "9:00 PM"
    }
]
const initialState = {
    shops: [...initialShops],
    selectedShop: [],
    filteredShops: [...initialShops]
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
const filterShops = (state, query) => {

    let newFilteredShops = [];
    console.log(query)
    for (const shop of state.shops) {
        const copyShop = { category: shop.category.toLowerCase(), area: shop.area.toLowerCase(), openingTime: shop.openingTime, closingTime: shop.closingTime };

        if ((query.category === copyShop.category || query.category === "all") && (query.area === copyShop.area || query.area === "all")) {
            newFilteredShops.push(shop)
        }

        else if (copyShop.openingTime === query.openingTime) {
            newFilteredShops.push(shop)
        }
        else if (copyShop.closingTime === query.closingTime) {
            newFilteredShops.push(shop)
        }

        else {
            console.log('not matched ')
        }


    }

    return { ...state, filteredShops: newFilteredShops }
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
            return deleteShop(state, payload);
        case ActionTypes.FILTER_SHOPS:
            return filterShops(state, payload);
        default:
            return state;
    }
}

export const selectedShopReducer = (state = {}, { type, payload }) => ({ state: payload })