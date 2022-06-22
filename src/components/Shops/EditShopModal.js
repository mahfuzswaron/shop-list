import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import { editShop } from '../../Redux/Actions/shop-actions';

const EditShopModal = (props) => {
    const categories = ["Grocery", "Butcher", "Baker", "Chemist", "Stationery shop"];
    const areas = ["Thane", "Pune", "Mumbai Suburban", "Nashik", "Nagpur", "Ahmednagar", "Solapur"];
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const { setEditShopModalShow } = props;
    const dispatch = useDispatch();
    const shop = useSelector((state) => state.selectedShop.state);
    if (!shop) return <p>loading...</p>
    const { name, category, area, openingDate, closingDate } = shop;

    const handleSubmitForm = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const name = form.name.value;
        const category = form.category.value;
        const area = form.area.value;
        const openingDate = form.openingDate.value;
        const closingDate = form.closingDate.value;
        const updatedShop = { id: shop.id, name, category, area, openingDate, closingDate };
        console.log(updatedShop);
        dispatch(editShop(updatedShop))
        setEditShopModalShow(false)
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

                    <Button className="" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </Modal.Body>
        </Modal>
    );
};

export default EditShopModal;