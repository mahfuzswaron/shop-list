import { combineReducers } from "redux";
import { shopReducer } from "./shopReducers";

export const reducers = combineReducers({
    allShops: shopReducer,
})