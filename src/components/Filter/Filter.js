import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import TimePicker from 'react-bootstrap-time-picker';

const Filter = () => {
    const categories = ["Grocery", "Butcher", "Baker", "Chemist", "Stationery", "shop"];
    const areas = ["Thane", "Pune", "Mumbai Suburban", "Nashik", "Nagpur", "Ahmednagar", "Solapur"];
    const [selectedOpeningTime, setSelectedOpeningTime] = useState("00:00");
    const [selectedClosingTime, setSelectedClosingTime] = useState("00:00");
    const [StartingClosingTime, setStartingClosingTime] = useState("00:00");
    const secondToHourString = second => ((second + 3600) / 3600).toString();

    const handleOpeningTimeChange = (e) => {
        setSelectedOpeningTime(e)
        const timeintoHourString = secondToHourString(e)
        if (timeintoHourString === '24') {
            console.log(timeintoHourString)
            setStartingClosingTime(`00:00`);
        }
        else {
            setStartingClosingTime(`${timeintoHourString}:00`)

        }

    }
    return (
        <aside className='w-1/3 bg-blue-100 bg-opacity-25 mt-3 mr-5 p-3 rounded-lg'>
            <h3>Filter</h3>
            <Form>
                <Form.Group className="mb-3" controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Select aria-label="Select Shop Category">
                        {
                            categories.map(c => <option key={c} value={c.toLowerCase()} >{c}</option>)
                        }
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="area">
                    <Form.Label>Shop Location</Form.Label>
                    <Form.Select aria-label="Shop Location">
                        {
                            areas.map(a => <option key={a} value={a.toLowerCase()} >{a}</option>)
                        }
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="openingTime">
                    <Form.Label>Opening Time</Form.Label>
                    <TimePicker value={selectedOpeningTime} onChange={handleOpeningTimeChange} start={"00:00"} end="23:00" step={60} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="closingTime">
                    <Form.Label>Closing Time</Form.Label>
                    <TimePicker value={selectedClosingTime} onChange={setSelectedClosingTime} start={StartingClosingTime} end="23:00" step={60} />
                </Form.Group>
            </Form>
        </aside>
    );
};

export default Filter;