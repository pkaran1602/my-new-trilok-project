import React from "react";
import { Accordion, Col, Container, Modal, Row } from "react-bootstrap";
import stylesheet from "./hiringview.module.css";
import API_URL from "../api_url/API_URL";
import pdf_icon from '../assets/pdf_dwn_icon.jpg';
import img_pic from '../assets/mnj4.png';
import file_not_avl from '../assets/file_not_avl.jpg'
import experience from '../assets/experience.png';
import relieving from '../assets/relieving.png';
import pay_slip from '../assets/payslip.png';

const HiringViewModel = (props) => {
  const { data, handleChange2, updateFun, show, handleClose } = props;
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        className={stylesheet.modal}
      >
        <Modal.Header closeButton>
          <Modal.Title><h5>Hiring Details</h5></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={stylesheet.hiringview_main}>
            <Container>
              <Accordion
                defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>User Details</Accordion.Header>
                  <Accordion.Body>
                    <Row class="mb-2">
                      <Col>
                        <div className={stylesheet.profile_img}>
                          {data.profile_url !== '' &&
                            <a href={`${API_URL}${data.profile_url}`} target='blank'>
                              <img src={`${API_URL}${data.profile_url}`} alt="user_pic" />
                            </a>
                          }
                          {data.profile_url === '' &&
                            <img src={img_pic} alt="user_pic" />
                          }
                        </div>
                      </Col>
                      <Col>
                        <div className={stylesheet.profile_img}>
                          <a href={`${API_URL}${data.cv_url}`} target='blank'>
                            <img src={pdf_icon} alt="cv_pic" />
                          </a>
                        </div>
                      </Col>
                    </Row>
                    <Row className='mt-2'>
                      <Col>
                        <div>
                          <label>First Name</label>
                        </div>
                      </Col>
                      <Col>
                        <div>
                          <input type="text" value={data.first_name} disabled />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <label>Last Name</label>
                      </Col>
                      <Col>
                        <div>
                          <input type="text" value={data.last_name} disabled />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <label>Phone Number</label>
                      </Col>
                      <Col>
                        <div>
                          <input type="number" value={data.phone} disabled />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <label>Email</label>
                      </Col>
                      <Col>
                        <div>
                          <input type="email" value={data.email} disabled />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <label>Address</label>
                      </Col>
                      <Col>
                        {" "}
                        <div>
                          <textarea value={data.address} disabled ></textarea>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <label>City</label>
                      </Col>
                      <Col>
                        {" "}
                        <div>
                          <input type='text' value={data.city} disabled />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <label>State</label>
                      </Col>
                      <Col>
                        {" "}
                        <div>
                          <input type='text' value={data.state} disabled />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <label>Pincode</label>
                      </Col>
                      <Col>
                        {" "}
                        <div>
                          <input type='tel' value={data.pincode} disabled />
                        </div>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Identification</Accordion.Header>
                  <Accordion.Body>

                    <Row className='mt-3'>
                      <label>Adhar Card</label>
                      <Col>
                        {data.adhar1_url &&
                          <div className={stylesheet.document_img}>
                            <a href={`${API_URL}${data.adhar1_url}`} target='blank'>
                              <img src={`${API_URL}${data.adhar1_url}`} alt="pancard" width="150px" height="100px" />
                            </a>
                          </div>
                        }
                        {!data.adhar1_url &&
                          <img src={file_not_avl} alt="pancard" width="120px" height="120px" />
                        }
                      </Col>
                      <Col>
                        {data.adhar2_url &&
                          <div className={stylesheet.document_img}>
                            <a href={`${API_URL}${data.adhar2_url}`} target='blank'>
                              <img src={`${API_URL}${data.adhar2_url}`} alt="pancard" width="150px" height="100px" />
                            </a>
                          </div>
                        }
                        {!data.adhar2_url &&
                          <img src={file_not_avl} alt="pancard" width="120px" height="120px" />
                        }
                      </Col>
                    </Row>
                    <Row className='mt-3'>
                      <label>PAN Card </label>
                      <Col>
                        {data.pancard1_url &&
                          <div className={stylesheet.document_img}>
                            <a href={`${API_URL}${data.pancard1_url}`} target='blank'>
                              <img src={`${API_URL}${data.pancard1_url}`} alt="pancard" width="150px" height="100px" />
                            </a>
                          </div>
                        }
                        {!data.pancard1_url &&
                          <img src={file_not_avl} alt="pancard" width="120px" height="120px" />
                        }
                      </Col>
                      <Col>
                        {data.pancard2_url &&
                          <div className={stylesheet.document_img}>
                            <a href={`${API_URL}${data.pancard2_url}`} target='blank'>
                              <img src={`${API_URL}${data.pancard2_url}`} alt="pancard" width="150px" height="100px" />
                            </a>
                          </div>
                        }
                        {!data.pancard2_url &&
                          <img src={file_not_avl} alt="pancard" width="120px" height="120px" />
                        }
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Education details</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col>
                        <label>Qualification</label>
                      </Col>
                      <Col>
                        <Row>
                          <Col>
                            <div>
                              <input
                                type="text"
                                value={data.highest_education}
                                disabled
                              />
                            </div>
                          </Col>
                          <Col>
                            <div>
                              <input type="text" value={data.education} disabled />
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Last company details</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col>
                        <label>Last/Current Company Name</label>
                      </Col>
                      <Col>
                        <div>
                          <input type="text" value={data.current_company} disabled />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <label>Last Achievement</label>
                      </Col>
                      <Col>
                        <div>
                          <input type="text" value={data.achievement} disabled />
                        </div>
                      </Col>
                    </Row>
                    <Row className='mt-2'>
                      <Col>
                        <div className={stylesheet.profile_img}>
                          {data.exp_letter_url &&
                            <a href={`${API_URL}${data.exp_letter_url}`} target='blank'>
                              <img src={experience} alt="experience_letter" />
                            </a>
                          }
                          {!data.exp_letter_url &&
                            <img src={file_not_avl} alt="pancard" width="120px" height="120px" />
                          }
                        </div>
                      </Col>
                      <Col>
                        <div className={stylesheet.profile_img}>
                          {data.relieving_letter_url &&
                            <a href={`${API_URL}${data.relieving_letter_url}`} target='blank'>
                              <img src={relieving} alt="relieving_letter" />
                            </a>
                          }
                          {!data.relieving_letter_url &&
                            <img src={file_not_avl} alt="pancard" width="120px" height="120px" />
                          }
                        </div>
                      </Col>
                      <Col>
                        <div className={stylesheet.profile_img}>
                          {data.pay_slip_url &&
                            <a href={`${API_URL}${data.pay_slip_url}`} target='blank'>
                              <img src={pay_slip} alt="pay_slip" />
                            </a>
                          }
                          {!data.pay_slip_url &&
                            <img src={file_not_avl} alt="pancard" width="120px" height="120px" />}
                        </div>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Application Details/Status</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col>
                        <label>Apply For</label>
                      </Col>
                      <Col>
                        <div>
                          <input type="text" value={data.applied_for_post} disabled />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <label for="exp">Application Status: </label>
                      </Col>
                      <Col>
                        <div>
                          <select
                            name="status"
                            value={data.status}
                            onChange={handleChange2}
                          >
                            <option value="PENDING">Pending</option>
                            <option value="REJECTED">Rejected</option>
                            <option value="IN_PROGRESS">In Progress</option>
                            <option value="SCHEDULED">Schedulled</option>
                            <option value="PASSED">Passed</option>
                            <option value="FAILED">Failed</option>
                          </select>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <label>Current CTC</label>
                      </Col>
                      <Col>
                        <Row>
                          <Col>
                            <div>
                              <input type="text" value={`${data.ctc_monthly} Monthly`} disabled />
                            </div>
                          </Col>
                          <Col>
                            <div>
                              <input type="text" value={`${data.ctc_yearly} Yearly`} disabled />
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <label>Expected CTC</label>
                      </Col>
                      <Col>
                        <Row>
                          <Col>
                            <div>
                              <input type="text" value={`${data.etc_monthly} Monthly`} disabled />
                            </div>
                          </Col>
                          <Col>
                            <div>
                              <input type="text" value={`${data.etc_yearly} Yearly`} disabled />
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <label value>Reference</label>
                      </Col>
                      <Col>
                        <div>
                          <input
                            type="text"
                            value={data.refference_by === 'friend' ? 'Friend' : data.refference_by}
                            disabled
                          />
                        </div>
                      </Col>
                    </Row>
                    {data.refference_by === 'friend' &&
                      <Row>
                        <Col>
                          <label value>Reference By </label>
                        </Col>
                        <Col>
                          <div>
                            <input
                              type="text"
                              value={data.refference_name}
                              disabled
                            />
                          </div>
                        </Col>
                      </Row>
                    }
                    <Row className="mt-2">
                      <Col>
                        <div className={stylesheet.submit_btn}>
                          <button onClick={updateFun} className={stylesheet.btn} >
                            Update
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Container>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default HiringViewModel;
