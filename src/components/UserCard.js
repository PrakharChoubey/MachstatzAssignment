import { Card, Col} from 'react-bootstrap';
import '../css/StyleCard.css';
import { toast } from 'react-toastify';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import UserInput from './UserInput';

toast.configure();
const GridUser = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => { setShow(true); };
    const getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <Col lg={3} md={4} xs={6}>
            <Card bg='info' className="mb-3 custom_grid" style={{ width: '14.8rem' }}>
                <Card.Header>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            {/* <Modal.Title>Edit User Detail</Modal.Title> */}
                        </Modal.Header>
                        <Modal.Body><UserInput User={{...props}} title="Edit User Detail" dis={true} /></Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                            <Button variant="primary" className="disabled" onClick={handleClose}>Save Changes</Button>
                        </Modal.Footer>
                    </Modal>
                    <span id="Icon" title="Edit" onClick = { handleShow }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                        </svg>
                    </span>
                    <span id="Icon" title="Delete" onClick={() => props.clickHandler(props.email)}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg></span>
                </Card.Header>
                <Card.Body className="custom_card_body">
                    <div className="avatar-circle" style={{ backgroundColor: getRandomColor() }}>
                        <span className="initials">{props.first_name ?
                            props.first_name.charAt(0).toUpperCase() :
                            props.fist_name ? props.fist_name.charAt(0).toUpperCase() : '?'}
                        </span>
                    </div>
                    <Card.Title id="cardTitle">{props.fist_name || props.first_name + " " + props.last_name} </Card.Title>
                </Card.Body>
            </Card>
        </Col>
        //     </Row>
        // </Container>

    )
}

export default GridUser;