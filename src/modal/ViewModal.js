import React from 'react'
import { Col, Container, Modal, Row } from 'react-bootstrap';
import stylesheet from './view.module.css';
import API_URL from '../api_url/API_URL';
import pdf_icon from '../assets/pdf_dwn_icon.jpg';
import img_pic from '../assets/profile.png';

const ViewModal = (props) => {
  const { data, handleChange2, updateFun, show, handleClose } = props;
  return (
    <div >
      <Modal show={show} onHide={handleClose} size='lg' className={stylesheet.modal}>
        <Modal.Header closeButton>
          <Modal.Title><h5>Interviewer Details </h5></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={stylesheet.hiringview_main}>
            <Container>
              <Row class="mb-2">
                <Col>
                  <div className={stylesheet.profile_img}>
                    {data.profile_url !== '' &&
                      <a href={`${API_URL}${data.profile_url}`} target='blank'>
                        <img src={`${API_URL}${data.profile_url}`}  alt="user_pic"/>
                      </a>
                    }
                    {data.profile_url === '' &&
                      <img src={img_pic}  alt="user_pic"/>
                    }
                  </div>
                </Col>
                <Col>
                  <div className={stylesheet.profile_img}>
                    <Col>
                      <div className={stylesheet.profile_img}>
                        <a href={`${API_URL}${data.cv_url}`} target='blank'>
                          <img src={pdf_icon}  alt="cv_pic"/>
                        </a>
                      </div>
                    </Col>
                  </div>
                </Col>
              </Row>
              <Row>
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
                  <label>Email</label>
                </Col>
                <Col>
                  {" "}
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
              <Row className="mt-2">
                <Col>
                  <div className={stylesheet.submit_btn}>
                    <button onClick={updateFun} className={stylesheet.btn} >
                      Update
                    </button>
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

export default ViewModal


