import React from 'react';
import Filter from '../Filter/Filter';
import Shops from '../Shops/Shops';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <section className='flex justify-between px-5 lg:px-20'>
                <Filter />
                <Shops />
            </section>
        </div>
    );
};

export default Home;