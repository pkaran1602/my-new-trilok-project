import React from 'react';
import stylesheet from './appraisal.module.css';
import { Col, Container, Modal, Row } from 'react-bootstrap';

const AppraisalViewModel = (props) => {
    const { data, show, handleClose } = props;
    return (
        <div>
            <Modal show={show} onHide={handleClose} size='lg' className={stylesheet.modal}>
                <Modal.Header closeButton>
                    <Modal.Title><h5>Appraisal Details</h5></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={stylesheet.appraisalview_main}>
                        <Container>
                            <Row>
                                <Col >
                                    <div>
                                        <label>Employee Name</label>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <input type="text" value={data.employee_name} disabled />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <label>Contact Number</label>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <input type="text" value={data.contact_number} disabled />
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
                                        <label>Position</label>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <input type="text" value={data.designation} disabled />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <label>Current package</label>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <input type="text" value={data.current_packg} disabled />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <label>Expected package</label>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <input type="text" value={data.expected_packg} disabled />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <label>Currunt Appraisal Start</label>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <input type="date" value={data.start_date} disabled />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <label>Currunt Appraisal End</label>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <input type="date" value={data.end_date} disabled />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <label>New Appraisal Start</label>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <input type="date" value={data.new_start_date} disabled />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <label>New Appraisal End</label>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <input type="date" value={data.new_end_date} disabled />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <label>Appraisal By </label>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <input type="text" value={data.appraisal_person} disabled />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <label>Feedback </label>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <input type="text" value={data.feedback} disabled />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <label>Rating</label>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <input type="text" value={data.rating} disabled />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <label>Hr Feedback</label>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <input type="text" value={data.hr_feedback} disabled />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <label>Hr Rating</label>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <input type="text" value={data.hr_rating} disabled />
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

export default AppraisalViewModel