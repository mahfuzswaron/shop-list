import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import TimePicker from 'react-bootstrap-time-picker';

const AddShopModal = (props) => {
    const categories = ["Grocery", "Butcher", "Baker", "Chemist", "Stationery", "shop"];
    const areas = ["Thane", "Pune", "Mumbai Suburban", "Nashik", "Nagpur", "Ahmednagar", "Solapur"];

    const handleSubmitForm = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        console.log(form)
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
                <Form onSubmit={() => handleSubmitForm()}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Shop Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCategory">
                        <Form.Label>Catagory</Form.Label>
                        <Form.Select aria-label="Select Shop Category">
                            {
                                categories.map(c => <option key={c} value={c.toLowerCase()} >{c}</option>)
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicArea">
                        <Form.Label>Shop Location</Form.Label>
                        <Form.Select aria-label="Shop Location">
                            {
                                areas.map(a => <option key={a} value={a.toLowerCase()} >{a}</option>)
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicTime">
                        <Form.Label>Opening Time</Form.Label>
                        <TimePicker start="10:00" end="21:00" step={30} />

                        <Form.Label className="mt-3">Closing Time</Form.Label>
                        <TimePicker start="10:00" end="21:00" step={30} />
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