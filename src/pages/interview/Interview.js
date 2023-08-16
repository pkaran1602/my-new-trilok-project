import React, { useEffect, useState } from "react";
import stylesheet from "./interview.module.css";
import profile from "../../assets/profile.png";
import { add_interview_detail } from "../../services/userServices";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loder from "../../components/loader/Loder";
import InterviewConfirmation from "./InterviewConfirmation";
import SuccessModal from "../../modal/SuccessModal";

const Interview = () => {
  const int_data = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    applied_for_post: "",
    experience_year: "",
    experience_months: "",
    highest_education: "",
    education: "",
    current_company: "",
    achievement: "",
    birth_date: "",
    expected_joining_date: "",
    ctc_yearly: "",
    ctc_monthly: "",
    etc_yearly: "",
    etc_monthly: "",
    refference_by: "social",
    refference_name: "",
    address: "",
    city: "",
    state: "",
    pincode: "",

  };
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [errors, setErrors] = useState({});
  const [loader, setLoader] = useState(true);
  const [img, setImg] = useState(null);
  const [file, setFile] = useState(null);
  const [file1, setFile1] = useState(null);
  const [user, setUser] = useState(int_data);

  const closeFun = () => {
    setShow(false);
  };

  const closeFun1 = () => {
    setShow1(false);
  };

  const validate = (name, value) => {
    switch (name) {
      case "phone":
        if (value.length < 10 || value.length > 10) {
          setErrors({
            ...errors,
            phone: "Phone Number should be 10 digits Only",
          });
        } else {
          delete errors.phone;
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
      case "ctc_monthly":
        if (!Number.isInteger(value)) {
          setErrors({
            ...errors,
            ctc_monthly: "CTC should be Integer Only",
          });
        } else {
          delete errors.phone;
          setErrors(errors);
        }
        break;
      default:
        break;
    }
  };

  const handleFile = (e) => {
    if (e.target.files[0] !== undefined) {
      var file_size = (e.target.files[0].size) / 1024;
      if (file_size > 2048) {
        setErrors({
          ...errors,
          file: "File size is too large",
        });
      } else {
        setFile(e.target.files[0]);
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file));
        delete errors.file;
        setErrors(errors);
      }
    }
  };
  const handleFile1 = (e) => {
    if (e.target.files[0] !== undefined) {
      var file_size = (e.target.files[0].size) / 1024;
      if (file_size > 2048) {
        setErrors({
          ...errors,
          file1: "File size is too large",
        });
      } else {
        setFile1(e.target.files[0]);
        delete errors.file1;
        setErrors(errors);
      }
    }
  };

  const handleChange = (e) => {
    validate(e.target.name, e.target.value);
    if (e.target.name === "ctc_monthly") {
      setUser({ ...user, [e.target.name]: e.target.value, "ctc_yearly": (e.target.value) * 12 },
      );
    } else if (e.target.name === "etc_monthly") {
      setUser({ ...user, [e.target.name]: e.target.value, "etc_yearly": (e.target.value) * 12 },
      );
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const confirmFun = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const submitFun = (e) => {
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("user_pic", file);
    formdata.append("user_cv", file1);
    formdata.append("first_name", user.first_name);
    formdata.append("last_name", user.last_name);
    formdata.append("email", user.email);
    formdata.append("phone", user.phone);

    formdata.append("applied_for_post", user.applied_for_post);
    formdata.append("experience_year", user.experience_year);
    formdata.append("experience_months", user.experience_months);
    formdata.append("highest_education", user.highest_education);
    formdata.append("education", user.education);

    formdata.append("current_company", user.current_company);
    formdata.append("achievement", user.achievement);
    formdata.append("expected_joining_date", user.expected_joining_date);
    formdata.append("birth_date", user.birth_date);
    formdata.append("ctc_yearly", user.ctc_yearly);

    formdata.append("ctc_monthly", user.ctc_monthly);
    formdata.append("etc_yearly", user.etc_yearly);
    formdata.append("etc_monthly", user.etc_monthly);
    formdata.append("refference_by", user.refference_by);
    formdata.append("refference_name", user.refference_name);

    formdata.append("address", user.address);
    formdata.append("city", user.city);
    formdata.append("state", user.state);
    formdata.append("pincode", user.pincode);


    add_interview_detail(formdata).then((result) => {
      if (result.success && result.code === 1) {
        closeFun();
        setImg(null);
        setUser(int_data);
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
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);
  return (
    <>
      {loader && <Loder />}
      {!loader && (
        <div className={stylesheet.interview_main}>
          <form onSubmit={confirmFun} className={stylesheet.interview}>
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
                          accept="image/png, image/jpeg"
                          hidden
                        />

                      </label>
                    </div>
                    {errors && errors.file && (
                      <span className="text-danger">{errors.file}</span>
                    )}
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
                        value={user.phone} ygg
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
                        disabled
                        required
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
                        <label for="refference_name">
                          Reference Employee Name
                        </label>
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
                    <label > Upload your CV</label>
                    <div className={stylesheet.add_cv}>
                      <input
                        type="file"
                        name="file1"
                        accept="application/pdf"
                        onChange={handleFile1}
                        required
                      />
                    </div>
                  </Col>
                  {errors && errors.file1 && (
                    <span className="text-danger">{errors.file1}</span>
                  )}
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
                      <button
                        className={stylesheet.btn}
                        type="submit"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </form>
          <InterviewConfirmation
            show={show}
            closeFun={closeFun}
            errors={errors}
            img={img}
            user={user}
            handleFile={handleFile}
            handleChange={handleChange}
            submitFun={submitFun}
          />
          <SuccessModal show={show1} closeFun={closeFun1} />
        </div>
      )}
    </>
  );
};

export default Interview;
