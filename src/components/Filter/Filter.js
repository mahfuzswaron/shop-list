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
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const dispatch = useDispatch();

    const handleOnChange = e => {
        const form = e.target;
        const category = form.category.value;
        const area = form.area.value;
        const openingDate = form.openingDate.value;
        const closingDate = form.closingDate.value;
        const query = { category, area, openingDate, closingDate };
        dispatch(filterShops(query))
    }

    return (
        <aside className='lg:w-1/3 w-full bg-blue-100 bg-opacity-25 mt-3 mr-5 p-3 rounded-lg'>
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

                <Form.Group className="mb-3" controlId="openingDate">
                    <Form.Label>Opening Date</Form.Label>
                    <DatePicker
                        name="openingDate"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="closingDate">
                    <Form.Label>Closing Date</Form.Label>
                    <DatePicker
                        name="closingDate"
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                    />
                </Form.Group>
            </Form>
        </aside>
    );
};

export default Filter;