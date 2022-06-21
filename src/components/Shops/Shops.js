import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EditShopModal from './EditShopModal';
import Shop from './Shop';

const Shops = () => {
    const [editShopModalShow, setEditShopModalShow] = useState(false);
    const shops = useSelector((state) => state.allShops.shops)

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