import { combineReducers } from "redux";
import { selectedShopReducer, shopReducer } from "./shopReducers";

export const reducers = combineReducers({
    allShops: shopReducer,
    selectedShop: selectedShopReducer
})