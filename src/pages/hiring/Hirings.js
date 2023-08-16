import React, { useEffect, useState } from 'react'
import { change_hiring_status, get_hiring_data, remove_hiring_detail } from '../../services/userServices';
import { Card, Table } from 'react-bootstrap';
import img_logo from '../../assets/profile.png'
import API_URL from '../../api_url/API_URL';
import { BsTrashFill, BsFillEyeFill } from 'react-icons/bs';
import Loder from '../../components/loader/Loder';
import Swal from 'sweetalert2';
import HiringViewModel from '../../modal/HiringViewModel';


const Hirings = () => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState({});
    const [hirings, setHirings] = useState([]);
    const [search_field, setSearch_field] = useState('');
    const [search_value, setSearch_value] = useState('');
    const [loader, setLoader] = useState(true);

    const handleChange = (e) => {
        setSearch_value(e.target.value);
        get_hirings(search_field, e.target.value);
    };
    const handleChange2 = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
       
    };
    const handleClose = () => {
        setShow(false)
    };
    const handleOpen = (int_data) => {
        setData(int_data);
        setShow(true);
    };

    const updateFun = () => {
        change_hiring_status(data).then((res) => {
            setShow(false)
            Swal.fire({
                icon: 'success',
                title: 'Status changed !',
                showConfirmButton: false,
                timer: 1500
            })
            get_hirings(search_field, search_value);
        })
    };
    const  deletFun = (hiring_id) => {
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
                remove_hiring_detail(hiring_id).then((res) => {
                    if (res.success === true && res.code === 1) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Removed !',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        get_hirings(search_field, search_value);
                    }
                })
            }
        })
    };
    const get_hirings = (field,value) => {
        get_hiring_data({search_field:field, search_value: value}).then((res) => {
            if (res.success === true && res.code === 1) {
                setHirings(res.data)
            }
            setTimeout(() => {
                setLoader(false);
            }, 800)
        })
    };

    useEffect(() => {
        get_hirings(search_field,search_value);
    }, [search_field,search_value]);
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
                        <h5>Hirings</h5>
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
                                    <option value="name">Name</option>
                                    <option value="email">Email</option>
                                    <option value="phone">Phone</option>
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
                    <div style={{ height: "54vh", overflowX: 'scroll' }} >

                        <Table striped >
                            <thead >
                                <tr >
                                    <th>Full Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Qualification</th>
                                    <th>Applied For</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody >
                                {hirings &&
                                    hirings.map((intrw) =>
                                        <tr key={intrw._id}>
                                            <td>
                                                <img src={intrw.profile_url ? `${API_URL}${intrw.profile_url}` : img_logo} width="30px" height="30px" style={{ borderRadius: "50%" }} alt='img' /> &nbsp;
                                                {intrw.first_name} {intrw.last_name}
                                            </td>
                                            <td>{intrw.email}</td>
                                            <td>{intrw.phone}</td>
                                            <td>{intrw.highest_education}</td>
                                            <td>{intrw.applied_for_post}</td>
                                            {intrw.status === 'PENDING' &&
                                                <td className="text-warning">Pending</td>
                                            }
                                            {intrw.status === 'REJECTED' &&
                                                <td className="text-danger">Rejected</td>
                                            }
                                            {intrw.status === 'IN_PROGRESS' &&
                                                <td className="text-primary">In Progress</td>
                                            }
                                            {intrw.status === 'SCHEDULED' &&
                                                <td className="text-info">Schedulled</td>
                                            }
                                            {intrw.status === 'PASSED' &&
                                                <td className="text-success">Passed</td>
                                            }
                                             {intrw.status === 'FAILED' &&
                                                <td className="text-danger">Failed</td>
                                            }
                                            <td>
                                                <BsFillEyeFill className='text-info' onClick={() => handleOpen(intrw)} style={{ cursor: 'pointer' }} />&nbsp; &nbsp;
                                                <BsTrashFill className='text-danger' onClick={() => { deletFun(intrw._id) }} style={{ cursor: 'pointer' }} />
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                            {hirings.length === 0 &&
                                <h5 className='text-danger'>Data Not available !</h5>
                            }
                        </Table>
                    </div>
                    </Card.Body>
                    <HiringViewModel
                        data={data}
                        handleChange2={handleChange2}
                        updateFun={updateFun}
                        show={show}
                        handleClose={handleClose}

                    />
                </div>
                </Card>
            }
        </div>
    )
}

export default Hirings;