import React, { useEffect, useState } from "react";
import stylesheet from "./appraisal.module.css";
import { Col, Row } from "react-bootstrap";
import Loder from "../../components/loader/Loder";
import { add_appraisal_detail } from "../../services/userServices";
import AppraisalConfirmation from "./AppraisalConfirmation";
import SuccessModal from "../../modal/SuccessModal";

const Appraisal = () => {
  const my_data = {
    employee_name: '',
    employee_id: '',
    designation: '',
    email: '',
    contact_number: '',
    start_date: '',
    end_date: '',
    new_start_date: '',
    new_end_date: '',
    current_packg: '',
    expected_packg: '',
    appraisal_person: '',
    feedback: '',
    rating: 1,
    hr_feedback: '',
    hr_rating: 1
  }
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [loader, setLoader] = useState(true);
  const [user_data, setUser_data] = useState(my_data);

  const closeFun = () => {
    setShow(false);
  };

  const closeFun1 = () => {
    setShow1(false);
  };

  const validate = (name, value) => {
    switch (name) {
      case "contact_number":
        if (value.length < 10 || value.length > 10) {
          setErrors({
            ...errors,
            contact_number: "Phone Number should be 10 digits Only",
          });
        } else {
          delete errors.contact_number;
          setErrors(errors);
        }
        break;
      case "email":
        var validRegex =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!value.match(validRegex)) {
          setErrors({
            ...errors,
            email: "Please enter a valid email !",
          });
        } else {
          delete errors.email;
          setErrors(errors);
        }
        break;
      default:
        break;
    }
  };

  const handleChange = (e) => {
    setUser_data({ ...user_data, [e.target.name]: e.target.value });
    validate(e.target.name, e.target.value);
  };
  const confirmFun = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const submitFun = (e) => {
    e.preventDefault();

    add_appraisal_detail(user_data).then((result) => {
      if (result.success && result.code === 1) {
        closeFun();
        setUser_data(my_data);
        setShow1(true);
      } else if (result.success === false && result.code === 111) {
        setErrors({
          ...errors,
          phone: result.message,
        });
      } else if (result.success === false && result.code === 112) {
        setErrors({
          ...errors,
          email: result.message,
        });
      }
    })
  };

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000)
  }, [])
  return (
    <>
      {loader &&
        <Loder />
      }
      {!loader &&
        <div className={stylesheet.appraisal_main}>
          <form onSubmit={confirmFun} className={stylesheet.aprs_form}>
            <Row>
              <Col>
                <label for="employee_name">Employee Name :</label><br />
                <input type="text"
                  name="employee_name"
                  value={user_data.employee_name}
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
                  value={user_data.employee_id}
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
                  value={user_data.designation}
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
                  value={user_data.email}
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
                  value={user_data.contact_number}
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
                  value={user_data.start_date}
                  onChange={handleChange}
                  required
                />
              </Col>
              <Col>
                <label for="end_date">To :</label>
                <input type="date"
                  name="end_date"
                  value={user_data.end_date}
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
                  value={user_data.new_start_date}
                  onChange={handleChange}
                  required
                />
              </Col>
              <Col>
                <label for="new_end_date">To :</label>
                <input type="date"
                  name="new_end_date"
                  value={user_data.new_end_date}
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
                  value={user_data.current_packg}
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
                  value={user_data.expected_packg}
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
                  value={user_data.appraisal_person}
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
                  value={user_data.feedback}
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
                    value={user_data.rating}
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
                  value={user_data.hr_feedback}
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
                    value={user_data.hr_rating}
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
          <AppraisalConfirmation
            show={show}
            closeFun={closeFun}
            user={user_data}
            errors={errors}
            handleChange={handleChange}
            submitFun={submitFun}
          />
          <SuccessModal show={show1} closeFun={closeFun1} />
        </div>
      }
    </>
  );
};

export default Appraisal;
