import React from "react";
import stylesheet from "./interviewConfirm.module.css";
import { Col, Container, Modal, Row } from "react-bootstrap";
import profile from "../../assets/profile.png";

const InterviewConfirmation = (props) => {
  const { show, closeFun, img, user, errors, handleFile, handleChange, submitFun } = props;
  return (
    <div>
      <Modal
        show={show}
        onHide={closeFun}
        size="lg"
        className={stylesheet.modal}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h5>Confirm your details</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form onSubmit={submitFun} className={stylesheet.interview}>
              <Container>
                <div>
                  <Row className="mb-4 text-center">
                    <div className={stylesheet.profile_img}>
                      <div>
                        <label>
                          <img src={img ? img : profile} alt="" width="100px" />
                          <input
                            type="file"
                            name="file"
                            onChange={handleFile}
                            hidden
                          />
                        </label>
                      </div>
                    </div>
                  </Row>
                  <Row>
                    <Col className="me-1">
                      {" "}
                      <div>
                        <label for="email">First Name </label>
                        <input
                          required
                          type="text"
                          name="first_name"
                          value={user.first_name}
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                    <Col className="">
                      <div>
                        <label for="last_name">Last Name </label>
                        <input
                          required
                          type="text"
                          name="last_name"
                          value={user.last_name}
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div>
                        <label for="email">Email</label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={user.email}
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                    {errors && errors.email && (
                      <span className="text-danger">{errors.email}</span>
                    )}
                  </Row>
                  <Row>
                    <Col>
                      <div>
                        <label for="phone">Phone No</label>
                        <input
                          required
                          type="tel"
                          name="phone"
                          value={user.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                    {errors && errors.phone && (
                      <span className="text-danger">{errors.phone}</span>
                    )}
                  </Row>
                  <Row>
                    <Col>
                      <div>
                        <label for="address">Address</label>
                        <textarea
                          name="address"
                          value={user.address}
                          onChange={handleChange}

                        >

                        </textarea>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div>
                        <label for="city">City</label>
                        <input
                          type="text"
                          name="city"
                          value={user.city}
                          onChange={handleChange}

                        />

                      </div>
                    </Col>
                    <Col>
                      <div>
                        <label for="state">State</label>
                        <input
                          type="text"
                          name="state"
                          value={user.state}
                          onChange={handleChange}
                        />

                      </div>
                    </Col>
                    <Col>
                      <div>
                        <label for="pincode">Pincode</label>
                        <input
                          type="tel"
                          name="pincode"
                          value={user.pincode}
                          onChange={handleChange}
                        />

                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-2 mb-2">
                    <Col>
                      <div className={stylesheet.expected_date}>
                        <label for="birth_date">Date of Birth</label>
                        <input
                          required
                          type="date"
                          name="birth_date"
                          value={user.birth_date}
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                    <Col>
                      <div className={stylesheet.expected_date}>
                        <label for="join_date">Expected Join Date</label>
                        <input
                          required
                          type="date"
                          name="expected_joining_date"
                          value={user.expected_joining_date}
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className={stylesheet.post_exp}>
                        <div>
                          <label for="applied_for_post">Post for apply</label>
                          <input
                            required
                            type="text"
                            name="applied_for_post"
                            value={user.applied_for_post}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col className="me-1">
                      <div>
                        <label for="exp">Experience</label>
                        <select
                          required
                          name="experience_year"
                          value={user.experience_year}
                          onChange={handleChange}
                        >
                          <option value="0">0 year</option>
                          <option value="1">1 year</option>
                          <option value="2">2 year</option>
                          <option value="3">3 year</option>
                          <option value="4">4 year</option>
                          <option value="5">5 year</option>
                          <option value="6">6 year</option>
                        </select>
                      </div>
                    </Col>
                    <Col className="ml-1">
                      <div>
                        <br />
                        <select
                          required
                          name="experience_months"
                          value={user.experience_months}
                          onChange={handleChange}
                        >
                          <option value="0">0 Months</option>
                          <option value="1">1 Months</option>
                          <option value="2">2 Months</option>
                          <option value="3">3 Months</option>
                          <option value="4">4 Months</option>
                          <option value="5">5 Months</option>
                          <option value="6">6 Months</option>
                          <option value="7">7 Months</option>
                          <option value="8">8 Months</option>
                          <option value="9">9 Months</option>
                          <option value="10">10 Months</option>
                          <option value="11">11 Months</option>
                        </select>
                      </div>
                    </Col>
                  </Row>

                  <Row className="mt-2 mb-2">
                    <label for="current">Current CTC</label>
                    <Col className="ml-2">
                      <div>
                        <input
                          placeholder="Monthly"
                          type="text"
                          name="ctc_monthly"
                          value={user.ctc_monthly}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </Col>
                    <Col className="me-1">
                      <div>
                        <input
                          placeholder="Yearly"
                          type="text"
                          name="ctc_yearly"
                          value={user.ctc_yearly}
                          onChange={handleChange}
                          disabled
                          required
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <label for="current">Expected CTC</label>
                    <Col className="ml-2">
                      <div>
                        <input
                          placeholder="Monthly"
                          type="text"
                          name="etc_monthly"
                          value={user.etc_monthly}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </Col>
                    <Col className="me-1">
                      <div>
                        <input
                          placeholder="Yearly"
                          type="text"
                          name="etc_yearly"
                          value={user.etc_yearly}
                          onChange={handleChange}
                          required
                          disabled
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-2 mb-2">
                    <label style={{ marginBottom: "10px" }} for="refference">
                      Reference
                    </label>

                    <Col>
                      <div style={{ width: "100%", display: "flex" }}>
                        <div>
                          <input
                            type="radio"
                            name="refference_by"
                            value="social"
                            checked={user.refference_by === "social"}
                            onChange={handleChange}
                          />
                        </div>
                        <div style={{ marginLeft: "7px" }}>
                          <label for="social">Social Media</label>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div style={{ width: "100%", display: "flex" }}>
                        <div>
                          <input
                            type="radio"
                            name="refference_by"
                            value="colleague"
                            checked={user.refference_by === "colleague"}
                            onChange={handleChange}
                          />
                        </div>
                        <div style={{ marginLeft: "7px" }}>
                          <label for="Colleague">Website</label>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div style={{ width: "100%", display: "flex" }}>
                        <div>
                          <input
                            type="radio"
                            name="refference_by"
                            value="friend"
                            checked={user.refference_by === "friend"}
                            onChange={handleChange}
                          />
                        </div>
                        <div style={{ marginLeft: "7px" }}>
                          <label for="Employee">Employee reference</label>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  {user.refference_by === "friend" && (
                    <Row>
                      <Col>
                        <div>
                          <label for="refference_name">Reference Employee Name</label>
                          <input
                            required
                            name="refference_name"
                            type="text"
                            value={user.refference_name}
                            onChange={handleChange}
                          />
                        </div>
                      </Col>
                    </Row>
                  )}
                  <Row>
                    <Col>
                      <div className={stylesheet.education}>
                        <label for="education"> Academic Highest Education</label>
                        <select
                          required
                          name="highest_education"
                          value={user.highest_education}
                          onChange={handleChange}
                        >
                          <option value="">Select Your Qulification</option>
                          <option value="Post Graduation">Post Graduation</option>
                          <option value="Graduation">Graduation</option>
                        </select>
                      </div>
                    </Col>
                  </Row>
                  {user.highest_education !== "" && (
                    <div>
                      <label for="educationn">Education</label>
                      <input
                        required
                        name="education"
                        type="text"
                        value={user.education}
                        onChange={handleChange}
                      />
                    </div>
                  )}
                  <Row>
                    <Col>
                      <div className={stylesheet.current_company}></div>
                      <label for="current_company">
                        Last/Current Comapany Name
                      </label>
                      <input
                        required
                        name="current_company"
                        type="text"
                        value={user.current_company}
                        onChange={handleChange}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className={stylesheet.achievement}>
                        <label for="achievement">Last Achievement</label>
                        <input
                          type="text"
                          name="achievement"
                          value={user.achievement}
                          onChange={handleChange}
                        />
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
                </div>
              </Container>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default InterviewConfirmation;
