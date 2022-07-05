import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import { filterShops } from '../../Redux/Actions/shop-actions';
import { areas, categories } from '../../Shared/data';
import "react-datepicker/dist/react-datepicker.css";
const Filter = () => {
    const filterCategories = ["ALL", ...categories];
    const filterAreas = ["ALL", ...areas];
    const dispatch = useDispatch();

    const handleOnChange = e => {
        const form = e.target.form;
        const category = form.category.value;
        const area = form.area.value;
        const availablity = form.availablity.value || "all";
        const query = { category, area, availablity };
        dispatch(filterShops(query))
        console.log(query);
    }

    return (
        <aside className='lg:w-1/3 w-full bg-blue-100 bg-opacity-25 mt-3 mr-5 p-3 rounded-lg animate__animated animate__fadeInLeft'>
            <h3>Filter</h3>
            <Form onChange={handleOnChange}>
                <Form.Group className="mb-3" controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Select aria-label="Select Shop Category">
                        {
                            filterCategories.map(c => <option key={c} value={c.toLowerCase()} >{c}</option>)
                        }
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="area">
                    <Form.Label>Shop Location</Form.Label>
                    <Form.Select aria-label="Shop Location">
                        {
                            filterAreas.map(a => <option key={a} value={a.toLowerCase()} >{a}</option>)
                        }
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="availablity">
                    <Form.Label>Availablity</Form.Label>
                    <Form.Check
                        label="All"
                        value="all"
                        type="radio"
                        name="availablity"
                        id={`radio-1`}
                    />
                    <Form.Check
                        label="open"
                        value="open"
                        type="radio"
                        name="availablity"
                        id={`radio-2`}
                    />
                    <Form.Check
                        label="closed"
                        value="closed"
                        type="radio"
                        name="availablity"
                        id={`radio-3`}
                    />
                </Form.Group>
            </Form>
        </aside>
    );
};

export default Filter;