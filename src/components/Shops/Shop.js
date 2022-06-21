import { Dropdown } from 'react-bootstrap';
import React from 'react';


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


const Shop = ({ shop }) => {
    const { name, category, id, area, opening, closing } = shop;
    return (
        <div className='bg-[#FAFAFA] px-5 py-3 rounded-tr-3xl relative '>
            <h3 className='text-3xl uppercase'>{name}</h3>
            <div className='flex space-x-8'>
                <p className='mb-1'>{tagIcon} {category}</p>
                <p className='mb-1'>{locationIcon} {area}</p>
            </div>
            <p>{clockIcon} {`${opening} - ${closing}`} </p>
            <button className='btn btn-primary '>
                PRODUCTS
            </button>
            <div className="absolute top-3 right-3">
                <Dropdown className="bg-transparent">
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Edit
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
};

export default Shop;