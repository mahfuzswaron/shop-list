import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EditShopModal from './EditShopModal';
import Shop from './Shop';

const Shops = () => {
    const [editShopModalShow, setEditShopModalShow] = useState(false);

    // let shops = [
    //     {
    //         "id": "shop1",
    //         "name": "Ahmed's Grocery",
    //         "category": "grocery",
    //         "area": "Ahmedabad",
    //         "opening": "10am",
    //         "closing": "9pm"
    //     },
    //     {
    //         "id": "shop2",
    //         "name": "Mahfuz's Store",
    //         "category": "Stationary",
    //         "area": "Ahmedabad",
    //         "opening": "10am",
    //         "closing": "9pm"
    //     },
    //     {
    //         "id": "shop3",
    //         "name": "Ibrahim's Shop",
    //         "category": "Electronic",
    //         "area": "Ahmedabad",
    //         "opening": "10am",
    //         "closing": "9pm"
    //     },


    // ]
    const shops = useSelector((state) => state.allShops.shops)
    // console.log(shopsRedux.allShops.shops);
    // console.log(shopsRedux)
    return (
        <div className="lg:w-2/3 w-full grid grid-cols-1 gap-3 pt-3">
            {
                shops.map(shop => <Shop
                    key={shop.id}
                    shop={shop}
                    setEditShopModalShow={setEditShopModalShow}
                />)
            }
            <EditShopModal
                show={editShopModalShow}
                onHide={() => setEditShopModalShow(false)}
                setEditShopModalShow={setEditShopModalShow}
            />
        </div>
    );
};

export default Shops;