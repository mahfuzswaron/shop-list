import React from 'react';
import Shop from './Shop';

const Shops = () => {
    let shops = [
        {
            "id": "shop1",
            "name": "Ahmed's Grocery",
            "category": "grocery",
            "area": "Ahmedabad",
            "opening": "10am",
            "closing": "9pm"
        },
        {
            "id": "shop2",
            "name": "Mahfuz's Store",
            "category": "Stationary",
            "area": "Ahmedabad",
            "opening": "10am",
            "closing": "9pm"
        },
        {
            "id": "shop3",
            "name": "Ibrahim's Shop",
            "category": "Electronic",
            "area": "Ahmedabad",
            "opening": "10am",
            "closing": "9pm"
        },


    ]

    return (
        <div className="lg:w-2/3 w-full grid grid-cols-1 gap-3 pt-3">
            {
                shops.map(shop => <Shop key={shop.id} shop={shop} />)
            }
        </div>
    );
};

export default Shops;