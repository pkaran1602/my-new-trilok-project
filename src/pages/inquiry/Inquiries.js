import React, { useEffect, useState } from 'react'
import { get_inquiry_data, remove_inquiry_detail } from '../../services/userServices';
import { Card, Table } from 'react-bootstrap';
import { BsTrashFill, BsFillEyeFill } from 'react-icons/bs';
import Loder from '../../components/loader/Loder';
import Swal from 'sweetalert2';
import InquiryViewModel from '../../modal/InquiryViewModel';


const Inquiries = () => {
    const [inquiry, setInquiry] = useState([]);
    const [show, setShow] = useState(false);
    const [data, setData] = useState({});
    const [search_field, setSearch_field] = useState('');
    const [search_value, setSearch_value] = useState('');
    const [loader, setLoader] = useState(true);

    const handleClose = () => {
        setShow(false)
    };
    const handleOpen = (int_data) => {
        setData(int_data);
        setShow(true);
    };

    const handleChange = (e) => {
        setSearch_value(e.target.value);
        get_inquiry(search_field, e.target.value);
    };
    const deletFun = (iquiry_id) => {
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
                remove_inquiry_detail(iquiry_id).then((res) => {
                    if (res.success === true && res.code === 1) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Removed !',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        get_inquiry(search_field, search_value);
                    }
                })
            }
        })
    };
    const get_inquiry = (field, value) => {
        get_inquiry_data({ search_field: field, search_value: value }).then((res) => {
            if (res.success === true && res.code === 1) {
                setInquiry(res.data)
            }
            setTimeout(() => {
                setLoader(false);
            }, 800)
        })
    };

    useEffect(() => {
        get_inquiry(search_field, search_value);
    }, [search_field, search_value]);
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
                                <h5>Inquiries</h5>
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
                            <div style={{ height: "54vh", overflowX: 'scroll' }}>

                                <Table striped >
                                    <thead >
                                        <tr >
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Meet Person</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {inquiry &&
                                            inquiry.map((inq) =>
                                                <tr key={inq._id}>
                                                    <td> {inq.name} </td>
                                                    <td>{inq.email}</td>
                                                    <td>{inq.phone}</td>
                                                    <td>{inq.meeting_person}</td>
                                                    <td>
                                                        <BsFillEyeFill className='text-info' onClick={() => { handleOpen(inq) }} style={{ cursor: 'pointer' }} />&nbsp; &nbsp;
                                                        <BsTrashFill className='text-danger' onClick={() => { deletFun(inq._id) }} style={{ cursor: 'pointer' }} />
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                    {inquiry.length === 0 &&
                                        <h5 className='text-danger'>Data Not available</h5>
                                    }
                                </Table>
                            </div>
                            <InquiryViewModel
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

export default Inquiries