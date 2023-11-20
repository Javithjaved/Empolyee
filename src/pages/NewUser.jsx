import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Header from '../components/Header';
import { useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState } from 'react';
// import axios from 'axios';
import SideBar from '../components/Sidebar';
import axios from 'axios';
const NewUser = () => {
    const Navigate = useNavigate();
    // const[postArr,setpostArr]=useState([]);
    const [post,setPast]=useState({
        name :'',
        email : '',
        mobile : '',
        message : '',
    })
    const handleChange=(e)=>{
        setPast({...post,[e.target.name]: e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        Navigate("/tabledashboradapi")
        axios.post("https://fts-backend.onrender.com/user/newRegistration")
        .then(response => {setPast(response);})
        .catch(err =>console.log(err));
        //  setpostArr([...postArr,post]);
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
                            <Form>
                                <Form.Group className="col-12" controlId="formGroupEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name='name' value={post.name} onChange={handleChange}/>
                                </Form.Group>
                                <Form.Group className="col-12" controlId="formGroupPassword">
                                    <Form.Label>Email-Id</Form.Label>
                                    <Form.Control type="Email" name='email' value={post.email} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="col-12" controlId="formGroupEmail">
                                    <Form.Label>Mobile No</Form.Label>
                                    <Form.Control type="Number" name='mobile' value={post.mobile} onChange={handleChange} />
                                </Form.Group>
                                <Form.Label>Leave a comment here</Form.Label>
                                <Form.Group className="col-12" controlId="formGroupPassword">
                                    <FloatingLabel controlId="floatingTextarea2" >
                                        <Form.Control
                                            as="textarea"
                                            style={{ resize: 'none' }}
                                            className='rows="4" cols="50"'
                                            name='message'
                                            value={post.message}
                                            onChange={handleChange}
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                                <hr></hr>
                                <div className=' col-12 button text-end'>
                                    <Button className='submit mt-2 me-2 ' variant="danger" >Cancel</Button>
                                    <Button className='submit mt-2 'onClick={(e)=>handleSubmit(e)} variant="danger" >Submit</Button>
                                </div>

                            </Form>
                        </div>
                    </Col>
                </Row>

            </div>
        </>
    )
}
export default NewUser;