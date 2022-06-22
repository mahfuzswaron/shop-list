import { Dropdown } from 'react-bootstrap';
import React from 'react';
import { useDispatch } from "react-redux";
import { deleteShop, selectShop } from '../../Redux/Actions/shop-actions';


const locationIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
const tagIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
</svg>
const clockIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block stroke-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>


const Shop = ({ shop, setEditShopModalShow }) => {
    const { name, category, id, area, opening, closing } = shop;
    const dispatch = useDispatch();
    return (
        <div className='bg-[#FAFAFA] sm:px-2 lg:px-5 sm:py-1  lg:py-3 rounded-tr-3xl relative '>
            <h3 className='lg:text-3xl text-xl uppercase'>{name}</h3>
            <div className='flex lg:flex-row lg:space-x-8 flex-col space-x-0'>
                <p className='mb-1'>{tagIcon} {category}</p>
                <p className='mb-1'>{locationIcon} {area}</p>
            </div>
            <p>{clockIcon} {`${opening} - ${closing}`} </p>
            <button className='btn btn-primary '>
                PRODUCTS
            </button>
            <div className="absolute top-7 lg:top-3  right-3 bg-transparent">
                <Dropdown className="bg-transparent">
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Edit
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => {
                            setEditShopModalShow(true)
                            dispatch(selectShop(shop))
                        }}
                        >Edit</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            dispatch(selectShop(shop))
                            const confirm = window.confirm(`Are you sure to delete ${name}`);
                            confirm && dispatch(deleteShop(shop))
                        }}
                        >Delete</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
};

export default Shop;