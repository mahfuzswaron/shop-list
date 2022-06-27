import { ActionTypes } from "../Constants/action-types";
const initialShops = [
    {
        "id": "shop1",
        "name": "Mudi Bazar",
        "category": "grocery",
        "area": "Ahmednagar",
        "openingDate": "06/22/2022",
        "closingDate": "07/22/2022"
    },
    {
        "id": "shop2",
        "name": "college store",
        "category": "Stationery shop",
        "area": "Thane",
        "openingDate": "06/17/2022",
        "closingDate": "09/12/2022"
    },
    {
        "id": "shop3",
        "name": "Mangsho bitan",
        "category": "Butcher",
        "area": "Pune",
        "openingDate": "06/12/2022",
        "closingDate": "06/26/2022"
    },
    {
        "id": "shop4",
        "name": "Vista pharmacy",
        "category": "Chemist",
        "area": "Mumbai Suburban",
        "openingDate": "06/12/2022",
        "closingDate": "06/26/2022"
    },
    {
        "id": "shop5",
        "name": "Sweet Salvation",
        "category": "Baker",
        "area": "Nashik",
        "openingDate": "06/12/2022",
        "closingDate": "06/26/2022"
    },
];

const initialState = {
    shops: [...initialShops],
    filteredShops: [...initialShops]
}

const addShop = (state, shop) => {
    const lastIndex = state.shops.length - 1;
    const lastId = state.shops[lastIndex].id;
    const newId = `shop${parseInt(lastId.slice(4)) + 1}`
    const newShop = { id: newId, ...shop };
    const preShops = state.shops;
    const newShops = [...preShops, newShop]
    return { shops: newShops }
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
    const shopAvailablity = (od, cd) => {
        if ((Date.parse(od) < new Date()) && (new Date() < Date.parse(cd))) {
            return 'open'
        }
        else {
            return "closed"
        }
    };
    let newFilteredShops = [];
    console.log(query)
    for (const shop of state.shops) {
        const copyShop = { category: shop.category.toLowerCase(), area: shop.area.toLowerCase(), openingDate: shop.openingDate, closingDate: shop.closingDate };

        if ((query.category === copyShop.category || query.category === "all") && (query.area === copyShop.area || query.area === "all")) {
            if (query.availablity === "all") {
                newFilteredShops.push(shop)
            }
            else if (query.availablity === shopAvailablity(shop.openingDate, shop.closingDate)) {
                newFilteredShops.push(shop)
            }
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