// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import Header from '../components/Header';
import { useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState } from 'react';
import SideBar from '../components/Sidebar';
import { Formik, Form } from 'formik';
import * as yup from "yup";
import axios from 'axios';
const NewUser = () => {
    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().required(),
        phone_number: yup.string().required(),
        message: yup.string().required(),

    })
    const Navigate = useNavigate();
    const [post, setPast] = useState({
        name: '',
        email: '',
        phone_number: '',
        message: '',
    })
    const handleChange = (e) => {
        setPast({ ...post, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://fts-backend.onrender.com/user/newRegistration", post)
            .then(response => setPast(response))
            .catch(err => { console.log(err); })
      
    }

    return (
        <>
            <div className='NewUser'>
                <div className='head d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block'>
                    <Header />
                </div>
                <Row>
                    <Col xs={2} className='sidebar1 d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block'>
                        <SideBar />
                    </Col>
                    <Col xs={10} className='bg3 p-3 pt-0'>
                        <div className="row mx-2 mt-3"><h5 className="label2 "> FTS NewUser &#10095; <span className="text "> Add FTS NewUser</span></h5></div>
                        <hr className="hr3 ms-3 me-3" ></hr>
                        <div className='col  personal rounded-4 p-3 ms-3 me-3 mt-4 pb-0'>
                            <Formik
                                validationSchema={schema}
                                initialValues={{
                                    name: "",
                                    email: "",
                                    phone_number: "",
                                    message: "",
                                }}
                               onSubmit={handleSubmit}
                            >
                                {({  errors }) => (
                                    <Form >
                                        <div class="mb-3">
                                            <label for="formGroupExampleInput" class="label">Name</label>
                                            <input type="text" class="form-control" id="formGroupExampleInput" name='name' value={post.name} onChange={handleChange} isInvalid={!!errors.name} />
                                        </div>
                                        <p type="invalid" className="text-danger">
                                            {errors.name}
                                        </p>
                                        <div class="mb-3">
                                            <label for="formGroupExampleInput2" class="label">Email-ID</label>
                                            <input type="text" class="form-control" id="formGroupExampleInput2" name='email' value={post.email} onChange={handleChange} isInvalid={!!errors.email} />
                                        </div>
                                        <p type="invalid" className="text-danger">
                                            {errors.email}
                                        </p>
                                        <p type="invalid" className="text-danger">
                                            {errors.password}
                                        </p>
                                        <div class="mb-3">
                                            <label for="formGroupExampleInput" class="label">Mobile No</label>
                                            <input type="text" class="form-control" id="formGroupExampleInput" name='phone_number' value={post.phone_number} onChange={handleChange} isInvalid={!!errors.phone_number} />
                                        </div>
                                        <p type="invalid" className="text-danger">
                                            {errors.phone_number}
                                        </p>
                                        <div class="mb-3">
                                            <label for="formGroupExampleInput2" class="label">Message</label>
                                            <input type="text" class="form-control" id="formGroupExampleInput2" name='message' value={post.message} onChange={handleChange} isInvalid={!!errors.message} />
                                        </div>
                                        <p type="invalid" className="text-danger">
                                            {errors.message}
                                        </p>
                                        <hr></hr>
                                        <div className='button text-end'>
                                            <button type="submit" class="Edit btn btn-danger" onClick={()=>Navigate("/table-fts-dashborad")}>Submit</button>
                                        </div>

                                    </Form>

                                )}

                            </Formik>

                            {/* <Form.Group className="col-12" controlId="formGroupEmail">
                                    <Form.Label className='label'>Name</Form.Label>
                                    <Form.Control type="text" name='name'  />
                                </Form.Group>
                                <Form.Group className="col-12" controlId="formGroupPassword">
                                    <Form.Label className='label'>Email-Id</Form.Label>
                                    <Form.Control type="Email" name='email'  />
                                </Form.Group>
                                <Form.Group className="col-12" controlId="formGroupEmail">
                                    <Form.Label className='label'>Mobile No</Form.Label>
                                    <Form.Control type="Number" name='phone_number' />
                                </Form.Group>
                                <Form.Label className='label'>Leave a comment here</Form.Label>
                                <Form.Group className="col-12" controlId="formGroupPassword">
                                    <FloatingLabel controlId="floatingTextarea2" >
                                        <Form.Control
                                            as="textarea"
                                            style={{ resize: 'none' }}
                                            className='rows="4" cols="50"'
                                            name='message'
                                            id='message'
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                                <hr></hr>
                                <div className=' col-12 button text-end'>
                                    <Button className='submit mt-2 me-2 ' variant="danger" >Cancel</Button>
                                    <Button className='submit mt-2 '  variant="danger" >Submit</Button>
                                </div> */}
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default NewUser;