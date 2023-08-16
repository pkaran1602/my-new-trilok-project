import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import icon from '../assets/correct.png'

const SuccessModal = (props) => {
    const { show, closeFun } = props;
    return (
        <div >
            <Modal show={show} onHide={closeFun} style={{ textAlign: 'center', marginTop: '150px' }}>
                <Modal.Body>
                    <div>
                        <img src={icon} alt='icon' width='100px' />
                    </div>
                    <div>
                        <h4 style={{fontWeight:"bold"}}>Thank You ! </h4>
                        <p>Your Submission has been sent.</p>
                    </div>
                    <div>
                        <Button variant="outline-primary" onClick={closeFun}>Okay</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}
export default SuccessModal