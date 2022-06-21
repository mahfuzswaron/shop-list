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
    ]
}
export const shopReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ActionTypes.SET_SHOPS:
            return state;
        default:
            return state;
    }
}