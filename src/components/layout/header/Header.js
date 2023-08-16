import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import stylesheet from './header.module.css';
import brand_logo from '../../../assets/mnj4.png';
import { AiOutlineLogout, AiOutlineUserSwitch, AiOutlineUsergroupAdd, AiOutlineUsergroupDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/actions/auth';
import { Button, Dropdown, Offcanvas } from 'react-bootstrap';
import { IoMdMenu } from "react-icons/io";
import { FaHome, FaUsersCog } from "react-icons/fa"
import user_icon from '../../../assets/profile.png'

const Header = () => {
    const { user: currentUser } = useSelector((state) => state.auth);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutFun = () => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Logout'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(logout());
                Swal.fire({
                    icon: 'success',
                    title: 'Logged Out !',
                    showConfirmButton: false,
                    timer: 800
                })
                navigate('/login');
            }
        })
    }
    return (
        <>
            <div className={stylesheet.header} >
                <div className={stylesheet.left}>
                    <div className={stylesheet.brand}>
                        <NavLink to="/dashboard" >
                            <img src={brand_logo} alt='logo' />
                        </NavLink>
                    </div >
                    <div>
                        <Button variant="primary" onClick={handleShow} className={stylesheet.md_menu}>
                            <IoMdMenu className={stylesheet.md_icon} />
                        </Button>
                    </div>
                    <div className={stylesheet.list}>
                        <ul >
                            {currentUser && currentUser.user_type === 'HR' &&
                                <>
                                    <NavLink className={stylesheet.link} to="/home">
                                        <li >  Home  </li>
                                    </NavLink>
                                    <NavLink className={stylesheet.link} to="/home">
                                        <li >  ABCD  </li>
                                    </NavLink>
                                    <NavLink className={stylesheet.link} to="/interviews">
                                        <li >   Interviews  </li>
                                    </NavLink>
                                    <NavLink className={stylesheet.link} to="/hirings">
                                        <li >  Hirings  </li>
                                    </NavLink>
                                    <NavLink className={stylesheet.link} to="/inquiries">
                                        <li > Inquiries  </li>
                                    </NavLink>
                                    <NavLink className={stylesheet.link} to="/appraisals">
                                        <li >  Appraisal  </li>
                                    </NavLink>
                                </>
                            }
                            {currentUser && currentUser.user_type === 'EMPLOYEE' &&
                                <>
                                    <NavLink className={stylesheet.link} to="/home">
                                        <li >  Home  </li>
                                    </NavLink>
                                </>
                            }
                            {currentUser && currentUser.user_type === 'ADMIN' &&
                                <>
                                    <NavLink className={stylesheet.link} to="/home">
                                        <li >  Home  </li>
                                    </NavLink>
                                    <NavLink to='/users'>
                                        <li > Users</li>
                                    </NavLink>
                                    <NavLink className={stylesheet.link} to="/interviews">
                                        <li >   Interviews  </li>
                                    </NavLink>
                                    <NavLink className={stylesheet.link} to="/hirings">
                                        <li >  Hirings  </li>
                                    </NavLink>
                                    <NavLink className={stylesheet.link} to="/inquiries">
                                        <li > Inquiries  </li>
                                    </NavLink>
                                    <NavLink className={stylesheet.link} to="/appraisals">
                                        <li >  Appraisal  </li>
                                    </NavLink>
                                </>
                            }
                        </ul>
                    </div>
                </div>
                {/* <div className={stylesheet.profile}>
                    <AiOutlineLogout onClick={logoutFun} className={stylesheet.md_icon} />
                </div> */}
                <div>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                            <img src={user_icon} width='50px' alt='brand logo' />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>

                            <Dropdown.Item >
                                <NavLink to='/profile'>Profile</NavLink>
                            </Dropdown.Item>
                            <div className={stylesheet.profile}>
                                <AiOutlineLogout onClick={logoutFun} className={stylesheet.md_icon} />
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <Offcanvas show={show} onHide={handleClose} >
                {
                    /* <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Header</Offcanvas.Title>
                    </Offcanvas.Header> */
                }
                <Offcanvas.Body className={stylesheet.Off_canvas}>
                    <ul >
                        <NavLink className={stylesheet.link} to="/home">
                            <li onClick={handleClose}> <FaHome /> Home  </li>
                        </NavLink>
                        <NavLink to='/users'>
                                        <li > <FaHome /> Users</li>
                                    </NavLink>
                        <NavLink className={stylesheet.link} to="/interviews">
                            <li onClick={handleClose}> <AiOutlineUserSwitch /> Interviews  </li>
                        </NavLink>
                        <NavLink className={stylesheet.link} to="/hirings">
                            <li onClick={handleClose}> <AiOutlineUsergroupAdd /> Hirings  </li>
                        </NavLink>
                        <NavLink className={stylesheet.link} to="/inquiries">
                            <li onClick={handleClose}> <FaUsersCog /> Inquiries  </li>
                        </NavLink>
                        <NavLink className={stylesheet.link} to="/appraisals">
                            <li onClick={handleClose}> <AiOutlineUsergroupDelete /> Appraisal  </li>
                        </NavLink>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Header;