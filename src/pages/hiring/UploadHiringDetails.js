import React, { useState } from 'react';
import stylesheet from './uploadHiring.module.css';
import profile from '../../assets/mnj2.png';
import { useNavigate, useParams } from 'react-router-dom';
import { upload_hiring_detail } from '../../services/userServices';
import Swal from 'sweetalert2';
import { Accordion, Col, Row } from 'react-bootstrap';


const UploadHiringDetails = () => {
    const navigate = useNavigate();
    const { hiring_id } = useParams();
    const [user_data, setUser_data] = useState({
        pancard1: null,
        pancard2: null,
        adhar1: null,
        adhar2: null,
        relieving_letter: null,
        exp_letter: null,
        pay_slip: null,
    })
    const handleChangeFile = (e) => {
        setUser_data({ ...user_data, [e.target.name]: e.target.files[0] });
    };

    const submitFun = (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("pancard1", user_data.pancard1);
        formdata.append("pancard2", user_data.pancard2);
        formdata.append("adhar1", user_data.adhar1);
        formdata.append("adhar2", user_data.adhar2);
        formdata.append("relieving_letter", user_data.relieving_letter);
        formdata.append("exp_letter", user_data.exp_letter);
        formdata.append("pay_slip", user_data.pay_slip);


        upload_hiring_detail(formdata, hiring_id).then((res) => {
            if (res.success === true && res.code === 1) {
                Swal.fire({
                    icon: 'success',
                    title: 'Uploaded',
                    text: 'Good!',
                    showConfirmButton: false,
                    timer: 600
                })
                navigate('/hiring');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    showConfirmButton: false,
                    timer: 600
                })
            }
        })
    };


    return (
        <>
            <div className={stylesheet.main}>
                <div className={stylesheet.upload_main}>
                    <form onSubmit={submitFun}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Identity </Accordion.Header>
                                <Accordion.Body style={{ background: "beige" }}>
                                    <div className={stylesheet.title}>
                                        <h3>Upload your Documents</h3>
                                    </div>
                                    <hr />
                                    <Row>
                                        <label className={stylesheet.label1}>PAN card Details</label>
                                        <Col>
                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <div style={{ width: "250px" }}>
                                                    <label>Front Side</label>
                                                    <label>
                                                        {user_data && !user_data.pancard1 &&
                                                            <img src={profile} alt="" width="100px" height="100px" />

                                                        }
                                                        {user_data && user_data.pancard1 &&
                                                            <img src={URL.createObjectURL(user_data.pancard1)} alt="" width="150px" height="100px" />
                                                        }
                                                        <input
                                                            type="file"
                                                            name="pancard1"
                                                            onChange={handleChangeFile}
                                                            // hidden
                                                            required
                                                        />
                                                    </label>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <div style={{ width: "250px" }}>
                                                    <label>Back Side2</label>

                                                    <label>
                                                        {user_data && !user_data.pancard2 &&
                                                            <img src={profile} alt="" width="100px" height="100px" />

                                                        }
                                                        {user_data && user_data.pancard2 &&
                                                            <img src={URL.createObjectURL(user_data.pancard2)} alt="" width="150px" height="100px" />
                                                        }
                                                        <input
                                                            type="file"
                                                            name="pancard2"
                                                            onChange={handleChangeFile}
                                                            // hidden
                                                            required
                                                        />
                                                    </label>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <label className={stylesheet.label1}>Adhar card Details</label>
                                        <Col>
                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <div style={{ width: "250px" }}>
                                                    <label>Front Side</label>
                                                    <label>
                                                        {user_data && !user_data.adhar1 &&
                                                            <img src={profile} alt="" width="100px" height="100px" />

                                                        }
                                                        {user_data && user_data.adhar1 &&
                                                            <img src={URL.createObjectURL(user_data.adhar1)} alt="" width="150px" height="100px" />

                                                        }
                                                        <input
                                                            type="file"
                                                            name="adhar1"
                                                            onChange={handleChangeFile}
                                                            // hidden
                                                            required
                                                        />
                                                    </label>
                                                </div></div>
                                        </Col>
                                        <Col>
                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <div style={{ width: "250px" }}>
                                                    <label>Back Side</label>
                                                    <label>
                                                        {user_data && !user_data.adhar2 &&
                                                            <img src={profile} alt="" width="100px" height="100px" />

                                                        }
                                                        {user_data && user_data.adhar2 &&
                                                            <img src={URL.createObjectURL(user_data.adhar2)} alt="" width="150px" height="100px" />

                                                        }
                                                        <input
                                                            type="file"
                                                            name="adhar2"
                                                            onChange={handleChangeFile}
                                                            // hidden
                                                            required
                                                        />
                                                    </label>
                                                </div></div>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Last Comapany</Accordion.Header>
                                <Accordion.Body style={{ background: "beige" }}>
                                    <div className='row  mt-2'>
                                        <label className={stylesheet.label1}>Last company Details</label>
                                        <div className='col-md-6'>
                                            <div>
                                                <label>Relieving letter</label>
                                            </div>
                                            <div>
                                                <input type='file'
                                                    name="relieving_letter"
                                                    onChange={handleChangeFile}
                                                    accept="application/pdf"
                                                    // hidden
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div>
                                                <label>Experience letter</label>
                                            </div>
                                            <div>
                                                <input type='file'
                                                    name="exp_letter"
                                                    onChange={handleChangeFile}
                                                    accept="application/pdf"
                                                    // hidden
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div>
                                                <label>Pay slips</label>
                                            </div>
                                            <div>
                                                <input type='file'
                                                    name="pay_slip"
                                                    onChange={handleChangeFile}
                                                    accept="application/pdf"
                                                    // hidden
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <div className={stylesheet.my_btn}>
                            <button type='submit'>
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UploadHiringDetails;