import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import TimePicker from 'react-bootstrap-time-picker';

const AddShopModal = (props) => {
    const categories = ["Grocery", "Butcher", "Baker", "Chemist", "Stationery", "shop"];
    const areas = ["Thane", "Pune", "Mumbai Suburban", "Nashik", "Nagpur", "Ahmednagar", "Solapur"];
    const [selectedOpeningTime, setSelectedOpeningTime] = useState("00:00");
    const [selectedClosingTime, setSelectedClosingTime] = useState("00:00");
    const [StartingClosingTime, setStartingClosingTime] = useState("00:00");
    const secondToHourString = second => ((second + 3600) / 3600).toString();

    const handleSubmitForm = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const name = form.name.value;
        const category = form.category.value;
        const area = form.area.value;
        const openingTime = secondToHourString(form.openingTime.value);
        const closingTime = secondToHourString(form.closingTime.value);
        const newShop = { name, category, area, openingTime, closingTime };
        console.log(newShop);
    }
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
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add New Shop
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => handleSubmitForm(e)}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Shop Name</Form.Label>
                        <Form.Control required type="text" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="category">
                        <Form.Label>Catagory</Form.Label>
                        <Form.Select required aria-label="Select Shop Category">
                            {
                                categories.map(c => <option key={c} value={c.toLowerCase()} >{c}</option>)
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="area">
                        <Form.Label>Shop Location</Form.Label>
                        <Form.Select required aria-label="Shop Location">
                            {
                                areas.map(a => <option key={a} value={a.toLowerCase()} >{a}</option>)
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="openingTime">
                        <Form.Label>Opening Time</Form.Label>
                        <TimePicker required value={selectedOpeningTime} onChange={handleOpeningTimeChange} start={"00:00"} end="23:00" step={60} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="closingTime">
                        <Form.Label>Closing Time</Form.Label>
                        <TimePicker required value={selectedClosingTime} onChange={setSelectedClosingTime} start={StartingClosingTime} end="23:00" step={60} />
                    </Form.Group>

                    <Button className="" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </Modal.Body>
        </Modal>
    );
};

export default AddShopModal;