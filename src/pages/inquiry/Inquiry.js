import React, { useEffect, useState } from "react";
import stylesheet from "./inquiry.module.css";
import { add_inquiry_details } from "../../services/userServices";
import Loder from "../../components/loader/Loder";
import SuccessModal from "../../modal/SuccessModal";
import Swal from "sweetalert2";

const Inquiry = () => {
  var inqr_data = {
    name: "",
    phone: "",
    email: "",
    birth_date: "",
    position: "",
    payment_req: "",
    last_company: "",
    experience: "",
    reffered_by: "",
    meeting_person: "",
    meeting_reason: "",
  };
  const [show, setShow] = useState(false);
  const [loader, setLoader] = useState(true);
  const [errors, setErrors] = useState({});
  const [inquiry, setInquiry] = useState(inqr_data);

  const closeFun = () => {
    setShow(false);
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
      case "birth_date":
        var age_diff = new Date().getTime() - new Date(value).getTime();
        var ageInYears = age_diff / (1000 * 60 * 60 * 24 * 365);

        if (ageInYears < 18) {
          setErrors({
            ...errors,
            birth_date: "You have not completed 18 years !",
          });
        } else {
          delete errors.birth_date;
          setErrors(errors);
        }
        break;

      default:
        break;
    }
  };

  const handleChange = (e) => {
    setInquiry({ ...inquiry, [e.target.name]: e.target.value });
    validate(e.target.name, e.target.value);
  };
  const submitFun = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "Your data will be submitted !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, SEND it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoader(true);
        add_inquiry_details(inquiry).then((result) => {
          console.log(result)
          setTimeout(() => {
            setLoader(false);
          }, 100);
          if (result.success === false && result.code === 1) {
            setShow(true);
            setInquiry(inqr_data);
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
      }
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500)
  }, [])

  return (
    <>
      {!loader && (
        <div className={stylesheet.main}>
          <div className={stylesheet.inquiry_form}>
            <div className={stylesheet.header}>
              <h3>Inquiry Form</h3>
            </div>
            <div className={stylesheet.myform}>
              <form onSubmit={submitFun}>
                <div>
                  <label>Name: </label>
                  <input
                    name="name"
                    value={inquiry.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label>Mob No : </label>
                  <input
                    type="tel"
                    name="phone"
                    value={inquiry.phone}
                    onChange={handleChange}
                    required
                  />
                  {errors && errors.phone && (
                    <span className="text-danger">{errors.phone}</span>
                  )}
                </div>
                <div>
                  <label>Email: </label>
                  <input
                    name="email"
                    value={inquiry.email}
                    onChange={handleChange}
                  />
                  {errors && errors.email && (
                    <span className="text-danger">{errors.email}</span>
                  )}
                </div>
                <div>
                  <label>DOB: </label>
                  <input
                    name="birth_date"
                    type="date"
                    value={inquiry.date}
                    onChange={handleChange}
                    required
                  />
                  {errors && errors.birth_date && (
                    <span className="text-danger">{errors.birth_date}</span>
                  )}
                </div>
                <div>
                  <label>Position: </label>
                  <input
                    name="position"
                    value={inquiry.position}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Payment Required: </label>
                  <input
                    name="payment_req"
                    value={inquiry.payment_req}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Last Company Name: </label>
                  <input
                    name="last_company"
                    value={inquiry.last_company}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Work Experience: </label>
                  <input
                    name="experience"
                    value={inquiry.experience}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Reference: </label>
                  <input
                    name="reffered_by"
                    value={inquiry.reffered_by}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Meet Person: </label>
                  <input
                    name="meeting_person"
                    value={inquiry.meeting_person}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label>Reason to come: </label>
                  <textarea
                    name="meeting_reason"
                    value={inquiry.meeting_reason}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={stylesheet.btn}>
                  <button
                    type="submit"
                    disabled={Object.keys(errors).length !== 0}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <SuccessModal show={show} closeFun={closeFun} />
        </div>
      )}
      {loader && <Loder />}
    </>
  );
};

export default Inquiry;
