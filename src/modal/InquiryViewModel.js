import React from 'react'
import { Col, Container, Modal, Row } from 'react-bootstrap';
import stylesheet from './inquiryView.module.css';

const InquiryViewModel = (props) => {
    const { data, show, handleClose } = props;
    
    return (
        <div >
            <Modal show={show} onHide={handleClose} size='lg' className={stylesheet.modal}>
                <Modal.Header closeButton>
                    <Modal.Title><h5>Inquiry Details</h5></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={stylesheet.inquiryview_main}>
                        <Container>
                            <Row>
                                <Col>
                                    <div>
                                        <label>Full Name</label>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <input type="text" value={data.name} disabled />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <label>Email</label>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <input type="text" value={data.email} disabled />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <label>Phone Number</label>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <input type="text" value={data.phone} disabled />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <label>Position</label>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <input type="text" value={data.position} disabled />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <label>Date of Birth</label>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <input type="date" value={data.birth_date} disabled />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <label>Last Company</label>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <input type="text" value={data.last_company} disabled />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <label>Work Experience </label>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <input type="text" value={data.experience} disabled />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <label>Payment </label>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <input type="text" value={data.payment_req} disabled />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <label>Meeting Person</label>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <input type="text" value={data.meeting_person} disabled />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <label>Meeting Reason</label>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <input type="text" value={data.meeting_reason} disabled />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}


export default InquiryViewModel