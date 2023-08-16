import React from 'react'
import stylesheet from './addEmploye.module.css';
import { Button, Modal } from 'react-bootstrap';


const AddEmployee = (props) => {
    const { show, closeFun, user, handleChange, errors, addEmpFun } = props;

    return (
        <div className={stylesheet.main}>
            <Modal show={show} onHide={closeFun} size='lg' className={stylesheet.modal}>
                <Modal.Header closeButton>
                    <Modal.Title><h5>Add New Employee </h5></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={stylesheet.container}>
                        <form className={stylesheet.my_form} onSubmit={addEmpFun}>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div>
                                        <label>First Name: </label>
                                    </div>
                                    <div>
                                        <input type='text'
                                            name='first_name'
                                            value={user.first_name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div>
                                        <label> Last Name: </label>
                                    </div>
                                    <div>
                                        <input type='text'
                                            name='last_name'
                                            value={user.last_name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div>
                                        <label>Phone Number: </label>
                                    </div>
                                    <div>
                                        <input type='number'
                                            name='mobile'
                                            value={user.mobile}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    {errors && errors.mobile &&
                                        <p className='text-danger'>{errors.mobile}</p>
                                    }
                                </div>
                                <div className='col-md-6'>
                                    <div>
                                        <label> Email: </label>
                                    </div>
                                    <div>
                                        <input type='email'
                                            name='email'
                                            value={user.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    {errors && errors.email &&
                                        <p className='text-danger'>{errors.email}</p>
                                    }
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div>
                                        <label>User Type </label>
                                    </div>
                                    <div>
                                        <div>
                                            <select
                                                name="user_type"
                                                value={user.user_type}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select Role</option>
                                                <option value="EMPLOYEE">Employee</option>
                                                <option value="HR">HR</option>
                                                <option value="MANAGER">Manager</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={stylesheet.btn}>
                                <Button variant='outline-primary' type='submit' disabled={Object.keys(errors).length !== 0}>SUBMIT</Button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default AddEmployee;