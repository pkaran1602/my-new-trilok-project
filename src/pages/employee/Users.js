import React, { useEffect, useState } from 'react';
import { Button, Card, Table } from 'react-bootstrap';
import Loder from '../../components/loader/Loder';
import { addEmployeeFun, getEmployeeData } from '../../services/userServices';
import { BsFillEyeFill, BsTrashFill } from 'react-icons/bs';
import AddEmployee from './AddEmployee';
import MyPagination from '../../components/pagination/MyPagination';
import Swal from 'sweetalert2';
import API_URL from '../../api_url/API_URL';
import img_logo from '../../assets/profile.png';

const Users = () => {
    const [show, setShow] = useState(false);
    const [pages, setPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [errors, setErrors] = useState({});
    const [search_field, setSearch_field] = useState('');
    const [search_value, setSearch_value] = useState('');
    const [loader, setLoader] = useState(true);
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        mobile: '',
        email: '',
        user_type: ''
    });

    const offset = 5;

    const handleClose = () => {
        setShow(false);
        setErrors({});
        setUser({
            first_name: '',
            last_name: '',
            mobile: '',
            email: '',
            user_type: ''
        });
    };

    const validate = (name, value) => {
        switch (name) {
            case "mobile":
                if (value.length < 10 || value.length > 10) {
                    setErrors({
                        ...errors,
                        mobile: "Phone Number should be 10 digits Only",
                    });
                } else {
                    delete errors.mobile;
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
    const handleChange2 = (event) => {
        validate(event.target.name, event.target.value);
        setUser({ ...user, [event.target.name]: event.target.value });
    };
    const addEmpFun = (e) => {
        e.preventDefault();
        addEmployeeFun(user).then((result) => {
            if (result.success === true && result.code === 1) {
                Swal.fire({
                    icon: 'success',
                    title: 'Employee Added !',
                    showConfirmButton: false,
                    timer: 1500
                })
                getUsers(offset, 0, search_field, search_value);
                handleClose();
            } else if (result.success === false && result.code === 111) {
                setErrors({ ...errors, mobile: result.message });
            } else if (result.success === false && result.code === 112) {
                setErrors({ ...errors, email: result.message });
            }
        })
    };
    const handleChange = (e) => {
        setSearch_value(e.target.value);
        getUsers(offset, 0, search_field, e.target.value);
    };
    const getUsers = (offset, currentPage, search_field, search_value) => {
        let json_data = {
            offset: offset,
            currentPage: currentPage,
            search_field: search_field,
            search_value: search_value
        };
        getEmployeeData(json_data).then((res) => {
            if (res.success === true && res.code === 1) {
                setUsers(res.data);
                setPages(res.total_page);
                if (res.total_page > 0 && currentPage === 0) {
                    setCurrentPage(1);
                }
            }
            setTimeout(() => {
                setLoader(false);
            }, 800)
        })
    };
    const viewFun = (user) =>{
        console.log(user);
    };

    //pagination
    const page_function = (page_number) => {
        setCurrentPage(page_number);
        getUsers(offset, page_number - 1, search_field, search_value);
    };
    const prev_function = () => {
        if (currentPage === 1) {
            setCurrentPage(1);
            getUsers(offset, 0, search_field, search_value);
        } else {
            setCurrentPage(currentPage - 1);
            getUsers(offset, currentPage - 2, search_field, search_value);
        }
    };
    const next_function = () => {
        if (currentPage === pages) {
            setCurrentPage(currentPage);
            getUsers(offset, currentPage - 1, search_field, search_value);
        } else {
            setCurrentPage(currentPage + 1);
            getUsers(offset, currentPage, search_field, search_value);
        }
    };
    useEffect(() => {
        getUsers(offset, currentPage, search_field, search_value);
    },[])
    return (
        <div className='m-1'>
            {loader &&
                <Loder />
            }
            {!loader &&
                <Card>
                     <Card.Header>
                     <div className='row '>
                        <div className="col-md-10">
                            <h5>Users List</h5>
                        </div>
                        <div className="col-md-2">
                            <Button variant='outline-primary' onClick={() => setShow(true)}>Add Employee</Button>
                        </div>
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
                                        Select Search Field
                                    </option>
                                    <option value="name"> Name</option>
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
                    <div style={{ height: "48vh", overflowX: 'scroll' }}>
                        <Table striped >
                            <thead >
                                <tr >
                                    <th>Full Name</th>
                                    <th>Employee Role</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    {/* <th>Actions</th> */}
                                </tr>
                            </thead>
                            <tbody >
                                {users && users.length > 0 &&
                                    users.map((user) =>
                                        <tr key={user._id}>
                                            <td> 
                                            <img src={user.profile_url ? `${API_URL}${user.profile_url}` : img_logo} width="30px" height="30px" style={{ borderRadius: "50%" }} alt='img' /> &nbsp;
                                                {user.first_name}  {user.last_name}
                                            </td>
                                            <td> {user.user_type}  </td>

                                            <td>{user.email}</td>
                                            <td>{user.mobile}</td>
                                            {/* <td>
                                                <BsFillEyeFill className='text-info' onClick={()=>viewFun(user)}/>&nbsp; &nbsp;
                                                <BsTrashFill className='text-danger' />
                                            </td> */}
                                        </tr>
                                    )
                                }
                                {users && users.length === 0 &&
                                    <p className='text-danger'>Data not Available!</p>
                                }
                            </tbody>
                        </Table>
                    </div>
                    <MyPagination
                        pages={pages}
                        currentPage={currentPage}
                        page_function={page_function}
                        prev_function={prev_function}
                        next_function={next_function}
                    />
                    <AddEmployee
                        show={show}
                        closeFun={handleClose}
                        user={user}
                        handleChange={handleChange2}
                        errors={errors}
                        addEmpFun={addEmpFun}
                    />
                    </Card.Body>
                </Card>
                }
        </div>
    )
}

export default Users;