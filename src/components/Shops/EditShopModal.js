import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import TimePicker from 'react-bootstrap-time-picker';
import { useDispatch, useSelector } from 'react-redux';
import { editShop } from '../../Redux/Actions/shop-actions';
import { formatTime, secondToHour } from '../../Shared/sharedFunctions';

const EditShopModal = (props) => {
    const categories = ["Grocery", "Butcher", "Baker", "Chemist", "Stationery", "shop"];
    const areas = ["Thane", "Pune", "Mumbai Suburban", "Nashik", "Nagpur", "Ahmednagar", "Solapur"];

    const [selectedOpeningTime, setSelectedOpeningTime] = useState("00:00");
    const [selectedClosingTime, setSelectedClosingTime] = useState("00:00");
    const [StartingClosingTime, setStartingClosingTime] = useState("00:00");
    // const secondToHour = second => (second / 3600);
    const { setEditShopModalShow } = props;
    // const formatTime = (time) => time > 12 ? `${(time - 12)}:00 PM` : `${time}:00 AM`;
    const dispatch = useDispatch();
    const shop = useSelector((state) => state.selectedShop.state);
    if (!shop) return <p>loading...</p>
    const { name, category, area, openingTime, closingTime } = shop;
    const handleSubmitForm = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const name = form.name.value;
        const category = form.category.value;
        const area = form.area.value;
        const openingTime = formatTime(secondToHour(form.openingTime.value));
        const closingTime = formatTime(secondToHour(form.closingTime.value));
        const updatedShop = { id: shop.id, name, category, area, openingTime, closingTime };
        console.log(updatedShop);
        dispatch(editShop(updatedShop))
        setEditShopModalShow(false)
    }
    const handleOpeningTimeChange = (e) => {
        setSelectedOpeningTime(e)
        const timeintoHour = secondToHour(e + 3600)
        if (timeintoHour === 24) {
            console.log(timeintoHour)
            setStartingClosingTime(`00:00`);
        }
        else {
            setStartingClosingTime(`${timeintoHour}:00`)

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
                    Edit Shop
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => handleSubmitForm(e)}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Shop Name</Form.Label>
                        <Form.Control defaultValue={name} type="text" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="category">
                        <Form.Label>Catagory</Form.Label>
                        <Form.Select defaultValue={category.toLowerCase()} aria-label="Select Shop Category">
                            {
                                categories.map(c => <option key={c} value={c.toLowerCase()} >{c}</option>)
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="area">
                        <Form.Label>Shop Location</Form.Label>
                        <Form.Select defaultValue={area.toLowerCase()} aria-label="Shop Location">
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

                    <Button className="" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </Modal.Body>
        </Modal>
    );
};

export default EditShopModal;