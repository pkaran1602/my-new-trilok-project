import React, { useEffect, useState } from 'react'
import { get_appraisal_detail, remove_appraisal_detail } from '../../services/userServices';
import { Card, Table } from 'react-bootstrap';
import { BsTrashFill, BsFillEyeFill } from 'react-icons/bs';
import Loder from '../../components/loader/Loder';
import Swal from 'sweetalert2';
import AppraisalViewModel from '../../modal/AppraisalViewModel';
import { logout } from '../../redux/actions/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Appraisals = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [data, setData] = useState({});
    const [appraisals, setAppraisals] = useState([]);
    const [search_field, setSearch_field] = useState('');
    const [search_value, setSearch_value] = useState('');
    const [loader, setLoader] = useState(true);

    const handleChange = (e) => {
        setSearch_value(e.target.value);
        get_appraisals(search_field, e.target.value);
    };

    const handleClose = () => {
        setShow(false)
    };

    const handleOpen = (appraisal_data) => {
        setData(appraisal_data);
        setShow(true);
    };

    const deletFun = (appraisal_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                remove_appraisal_detail(appraisal_id).then((res) => {
                    if (res.success === true && res.code === 1) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Removed !',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        get_appraisals(search_field, search_value);
                    }
                })
            }
        })
    };

    const get_appraisals = (field, value) => {
        get_appraisal_detail({ search_field: field, search_value: value }).then((res) => {
            if (res.success === true && res.code === 1) {
                setAppraisals(res.data)
            } else if (res.success === false && (res.code === 888 || res.code === 999)) {
                dispatch(logout());
                navigate('/login');
            }
            setTimeout(() => {
                setLoader(false);
            }, 800)
        })
    };

    useEffect(() => {
        get_appraisals(search_field, search_value);
    }, []);
    return (
        <div className='m-1'>
            {loader &&
                <Loder />
            }
            {!loader &&
                <Card>
                    <div>
                        <Card.Header>

                            <div>
                                <h5>Appraisals</h5>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className='row d-flex justify-content-center'>
                                <div className="col-md-3">
                                    <div>
                                        <label>Search By </label>
                                    </div>
                                    <div>
                                        <select
                                            class="form-select"
                                            name="search_field"
                                            value={search_field}
                                            onChange={(e) => setSearch_field(e.target.value)}
                                        >
                                            <option selected value="">
                                                Select
                                            </option>
                                            <option value="name"> Name</option>
                                            <option value="employee_id">Employee ID</option>
                                            <option value="email">Email</option>
                                            <option value="contact_number">Phone</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div>
                                        <label>Search Value </label>
                                    </div>
                                    <div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="last_name"
                                            value={search_value}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div style={{ height: "55vh", overflowX: 'scroll' }}>
                                <Table striped >
                                    <thead >
                                        <tr >
                                            <th>Full Name</th>
                                            <th>Employee ID</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {appraisals &&
                                            appraisals.map((appraisal) =>
                                                <tr key={appraisal._id}>
                                                    <td> {appraisal.employee_name}  </td>
                                                    <td> {appraisal.employee_id}  </td>
                                                    <td>{appraisal.email}</td>
                                                    <td>{appraisal.contact_number}</td>
                                                    <td>
                                                        <BsFillEyeFill className='text-info' onClick={() => handleOpen(appraisal)} style={{ cursor: 'pointer' }} />&nbsp; &nbsp;
                                                        <BsTrashFill className='text-danger' onClick={() => { deletFun(appraisal._id) }} style={{ cursor: 'pointer' }} />
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                    {appraisals.length === 0 &&
                                        <h5 className='text-danger'>Data Not available</h5>
                                    }
                                </Table>
                            </div>
                            <AppraisalViewModel
                                data={data}
                                show={show}
                                handleClose={handleClose}
                            />
                        </Card.Body>
                    </div>
                </Card>
            }
        </div>
    )
}

export default Appraisals