import React from 'react'
import { Col, Modal, Row } from 'react-bootstrap';
import stylesheet from './appraisalConfirmation.module.css'

const AppraisalConfirmation = (props) => {
    const { show, closeFun, user, errors, handleChange, submitFun } = props;
    return (
        <div>
            <Modal show={show} onHide={closeFun} size="lg" >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h5>Confirm your details</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                    <form onSubmit={submitFun} className={stylesheet.aprs_form}>
            <Row>
              <Col>
                <label for="employee_name">Employee Name :</label><br />
                <input type="text"
                  name="employee_name"
                  value={user.employee_name}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label for="employee_id">Employee ID :</label><br />
                <input type="text"
                  name="employee_id"
                  value={user.employee_id}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label for="designation">Designation</label><br />
                <input type="text"
                  name="designation"
                  value={user.designation}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label for="email">Email :</label><br />
                <input type="text"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
                {errors && errors.email &&
                  <p className="text-danger">{errors.email}</p>
                }
              </Col>
            </Row>
            <Row>
              <Col>
                <label for="contact_number">Contact No :</label><br />
                <input type="text"
                  name="contact_number"
                  value={user.contact_number}
                  onChange={handleChange}
                  required
                />
                {errors && errors.contact_number &&
                  <p className="text-danger">{errors.contact_number}</p>
                }
              </Col>
            </Row>
            <Row>
              <Col>
                <label for="appraisal_period">Currunt Appraisal period :</label><br />
              </Col>
            </Row>
            <Row>
              <Col>
                <label for="start_date">From :</label>
                <input type="date"
                  name="start_date"
                  value={user.start_date}
                  onChange={handleChange}
                  required
                />
              </Col>
              <Col>
                <label for="end_date">To :</label>
                <input type="date"
                  name="end_date"
                  value={user.end_date}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label for="new_appraisal_period">New Appraisal period :</label><br />
              </Col>
            </Row>
            <Row>
              <Col>
                <label for="new_start_date">From :</label>
                <input type="date"
                  name="new_start_date"
                  value={user.new_start_date}
                  onChange={handleChange}
                  required
                />
              </Col>
              <Col>
                <label for="new_end_date">To :</label>
                <input type="date"
                  name="new_end_date"
                  value={user.new_end_date}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label for="current_packg">Current package (Yearly) :</label>
                <input type="text"
                  name="current_packg"
                  value={user.current_packg}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label for="expected_packg">Expected package (Yearly) :</label>
                <input type="text"
                  name="expected_packg"
                  value={user.expected_packg}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label for="feedback">Appraisal Person :</label>
                <input type="text"
                  name="appraisal_person"
                  value={user.appraisal_person}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label for="feedback">Review/Feedback :</label>
                <input type="text"
                  name="feedback"
                  value={user.feedback}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label for="rating">Overall Rating (Max 5):</label>
                <div>
                  <select
                    required
                    name="rating"
                    value={user.rating}
                    onChange={handleChange}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <label for="hr_feedback">HR Feedback (Max 5):</label>
                <input type="text"
                  name="hr_feedback"
                  value={user.hr_feedback}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label for="hr_rating">HR Overall Rating  :</label>
                <div>
                  <select
                    required
                    name="hr_rating"
                    value={user.hr_rating}
                    onChange={handleChange}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className={stylesheet.submit_btn}>
                  <input
                    className={stylesheet.btn}
                    type="submit"
                    name="submit_btn"
                  />
                </div>
              </Col>
            </Row>
          </form>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default AppraisalConfirmation