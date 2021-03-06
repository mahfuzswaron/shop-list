import React, { useState } from 'react';
import Filter from '../Filter/Filter';
import Shops from '../Shops/Shops';
import Banner from './Banner';
import { Button } from 'react-bootstrap';
import AddShopModal from '../Shops/AddShopModal';
const Home = () => {
    const [addShopModalShow, setAddShopModalShow] = useState(false);
    return (
        <div>
            <Banner />
            <div className='flex justify-end px-[1.25rem] lg:px-20 py-4 animate__animated animate__fadeInRight '>
                <Button variant="primary" onClick={() => setAddShopModalShow(true)}>
                    Add Shop
                </Button>
            </div>
            <AddShopModal
                show={addShopModalShow}
                onHide={() => setAddShopModalShow(false)}
                setAddShopModalShow={setAddShopModalShow}
            />

            <section className='flex lg:flex-row flex-col justify-between px-[1.25rem] lg:px-20'>
                <Filter />
                <Shops />
            </section>
        </div>
    );
};

export default Home;