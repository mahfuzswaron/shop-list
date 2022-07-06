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
const dateIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4  inline-block stroke-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>


const Shop = ({ shop, setEditShopModalShow }) => {
    const { name, category, area, openingDate, closingDate } = shop;
    const dispatch = useDispatch();

    const isOpen = () => (Date.parse(shop.openingDate) < new Date()) && (new Date() < Date.parse(shop.closingDate))

    return (
        <div className='bg-[#FAFAFA] sm:px-2 lg:px-5 sm:py-1  lg:py-3 rounded-tr-3xl relative animate__animated animate__fadeInRight'>
            <h3 className='lg:text-3xl text-xl uppercase'>{name}</h3>
            <div className='flex lg:flex-row lg:space-x-8 flex-col space-x-0'>
                <p className='mb-1'>{tagIcon} {category}</p>
                <p className='mb-1'>{locationIcon} {area}</p>
            </div>
            <p>{dateIcon} {openingDate} - {closingDate} {isOpen() ? <span className="bg-green-200 text-green-500 text-center text-xs font-medium px-2 py-1 lg:mx-3 my-2 lg:my-0 lg:inline block w-20 rounded-full ">OPEN</span> : <span className="bg-red-200 text-red-500 text-center text-xs font-medium px-2 py-1 lg:mx-3 my-2 lg:my-0 lg:inline block w-24 rounded-full">CLOSED</span>} </p>
            <button className='btn btn-primary '>
                GALLERY
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