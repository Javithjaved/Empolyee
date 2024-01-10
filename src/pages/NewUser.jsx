import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import Header from '../components/Header';
import SideBar from '../components/Sidebar';
import { Formik, Form } from 'formik';

const NewUser = ({ active, setActive, isSignedIn, setIsSignedIn }) => {
    const getapi = process.env.REACT_APP_GETAPI;
    const postapi = process.env.REACT_APP_POSTAPI;
    const putapi = process.env.REACT_APP_PUTAPI;
    const Navigate = useNavigate();
    const params = useParams();
    const schema = yup.object().shape({
        name: yup.string().required("Name is a Required Field"),
        email: yup.string().required("Email-ID is a Required Field"),
        phone_number: yup.string().required("Mobile No is a Required Field"),
        message: yup.string().required("Message is a Required Field"),
    });
    const [post, setPost] = useState({
        name: '',
        email: '',
        phone_number: '',
        message: '',
    });
    useEffect(() => {
        if (params.id) {
            axios({
                method: "get",
                url: `${getapi}id=${params.id}`
            })
                .then((response) => {
                    setPost(response.data.response.user);

                })
                .catch((err) => {
                    console.log(err);
                });
        }

    }, [params.id, getapi]);
    const handleSubmit = async (values) => {
        try {
            if (!params.id) {
                await axios({
                    method: "post",
                    url: postapi,
                    data: values,
                })
                toast.success('Register Success...');
            }
            else {
                await axios({
                    method: "put",
                    url: `${putapi}id=${params.id}`,
                    data: values,

                })
                toast.success('Update Success...');
            }
            setTimeout(() => {
                Navigate('/table-fts-dashborad');
            }, 2000);
        } catch (error) {
            console.error('Error:', error);
        }

    };

    return (
        <>
            <div className="NewUser">
                <div className="head d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block">
                    <Header isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}  active={active} setActive={setActive} />
                </div>
                <Row className='w-100'>
                    <Col xs={2} className="sidebar1 d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block ">
                        <SideBar active={active} setActive={setActive} />
                    </Col>
                    <Col className="backgroundcolor pt-0 p-0 col-12-md w-100">
                        <div className="row mx-2 mt-3">
                            <h5 className="label2 ">
                              <span className='pointer' onClick={()=>Navigate("/table-fts-dashborad")}>FTS DashBoard </span>   &#10095; <span className="text "> FTS{params.id ? ' Edit' : ' Add'} User</span>
                            </h5>
                        </div>
                        <hr className="hr3 ms-3 me-3"></hr>
                        <div className="col personal rounded-4 p-3 ms-4 me-3 mt-4 pb-0">
                            <Formik
                                validationSchema={schema}
                                onSubmit={handleSubmit}
                                initialValues={{
                                    name: post.name || '',
                                    email: post.email || '',
                                    phone_number: post.phone_number || '',
                                    message: post.message || '',
                                }}
                                enableReinitialize={true}
                            >
                                {({ handleSubmit, handleChange, values, errors }) => (
                                    <Form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="formGroupExampleInput" className="label">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control mt-2"
                                                id="formGroupExampleInput"
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleChange}
                                                isInvalid={!!errors.name}
                                            />
                                        </div>
                                        <p type="invalid" className="text-danger">
                                            {errors.name}
                                        </p>
                                        <div className="mb-3">
                                            <label htmlFor="formGroupExampleInput2" className="label">
                                                Email-ID
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control mt-2"
                                                id="formGroupExampleInput2"
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleChange}
                                                isInvalid={!!errors.email}
                                            />
                                        </div>
                                        <p type="invalid" className="text-danger">
                                            {errors.email}
                                        </p>
                                        <p type="invalid" className="text-danger">
                                            {errors.password}
                                        </p>
                                        <div className="mb-3">
                                            <label htmlFor="formGroupExampleInput" className="label">
                                                Mobile No
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control mt-2"
                                                id="formGroupExampleInput"
                                                name="phone_number"
                                                value={values.phone_number}
                                                onChange={handleChange}
                                                onBlur={handleChange}
                                                isInvalid={!!errors.phone_number}
                                            />
                                        </div>
                                        <p type="invalid" className="text-danger">
                                            {errors.phone_number}
                                        </p>
                                        <div className="mb-3">
                                            <label htmlFor="formGroupExampleInput2" className="label">
                                                Message
                                            </label>

                                            <textarea className="form-control mt-2" id="formGroupExampleInput2" name="message"
                                                value={values.message}
                                                onChange={handleChange}
                                                onBlur={handleChange}
                                                isInvalid={!!errors.message} rows="3"></textarea>
                                        </div>
                                        <p type="invalid" className="text-danger">
                                            {errors.message}
                                        </p>
                                        <hr></hr>
                                        <div className="text-end p-2">
                                            <button type="button" className="button btn btn-danger mx-1" onClick={() => Navigate('/table-fts-dashborad')}>
                                                Cancel
                                            </button>
                                            <button type="submit" className="button btn btn-danger">
                                                {params.id ? 'Update' : 'Submit'}
                                            </button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </Col>
                </Row>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={4000}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};

export default NewUser;
