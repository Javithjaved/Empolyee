import { Container, Col, Row, Button } from "react-bootstrap";
import SideBar from "../components/Sidebar";
import Header from "../components/Header";
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { actionspostapi } from "../redux/actions/actionspostapi";
import { useDispatch } from "react-redux";
import { product_actions } from "../redux/actions/actions";
import { actionsPut } from "../redux/actions/actionsPut";
import { toast, ToastContainer } from "react-toastify";
const ProductFrom = ({ active, setActive, isSignedIn, setIsSignedIn }) => {
    const Navigate = useNavigate();
    const dispatch = useDispatch()
    const [userInputValue, setuserInputValue] = useState({
        title: "",
        price: "",
        rating: "",
        category: "",
        image: "",
        description: "",
    })
    const params = useParams();
    const handleChangeinputvalue = (e) => {
        setuserInputValue({ ...userInputValue, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        if (params.id) {
            product_actions(dispatch);
        }
    }, [dispatch, params.id])
    const handleSubmit = () => {
        if (!params.id) {
            actionspostapi(userInputValue)
            toast.success("Add Your Products...")
        }
        else {
            actionsPut(dispatch, userInputValue)
            toast.success("Your products are Update...")
        }
        setTimeout(() => {
            Navigate("/product-list")
        }, 2000);
    }
    const Category = ["", "men's clothing", "jewelery", "women's clothing", "electronics"]
    return (
        <Container fluid className="p-0">
            <Header isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} active={active} setActive={setActive} />
            <Row>
                <Col xl={2}  className="sidebar1 d-sm-none d-md-block d-none col-xl-2 col-md-2 col-lg-2" ><SideBar active={active} setActive={setActive} /></Col>
                <Col xl={10} className="backgroundcolor p-0">
                    <h4 className="text ms-3 ">
                        <span className="pointer" onClick={() => Navigate("/product-list")}>Products List  &#10095; </span>
                        Products From
                    </h4>
                    <div className="line me-3 ms-3">
                        <hr></hr>
                    </div>
                    <div className="col personal rounded-4 col-sm-12 col-xl-10 col-lg-10 col-md-10 p-3 ms-4">
                        <Row>
                            <Col sm={12} md={6} xl={6}>
                                <Form.Group  >
                                    <Form.Label className="label">Title</Form.Label>
                                    <Form.Control type="text" name="title" value={userInputValue.title} onChange={(e) => handleChangeinputvalue(e)} />
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} xl={6}>
                                <Form.Group  >
                                    <Form.Label className="label">Price</Form.Label>
                                    <Form.Control type="text" name="price" value={userInputValue.price} onChange={(e) => handleChangeinputvalue(e)} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group className="mb-3" >
                                    <Form.Label className="label">Rating</Form.Label>
                                    <Form.Control type="text" name="rating" value={userInputValue.rating} onChange={(e) => handleChangeinputvalue(e)} />
                                </Form.Group>
                            </Col>
                            <Col sm={12}>
                                <Form.Group className="mb-3" >
                                    <Form.Label className="label">Category  </Form.Label>
                                    <select className="form-select" id="Category" name="Category" onChange={(e) => handleChangeinputvalue(e)}>

                                        {Category.map((Category) => {
                                            return (
                                                <option value={Category}>{Category}</option>
                                            )
                                        })
                                        }
                                    </select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group className="mb-3 " >
                                    <Form.Label className="label">Image</Form.Label>
                                    <Form.Control type="text" name="image" value={userInputValue.image} onChange={(e) => handleChangeinputvalue(e)} />
                                </Form.Group>
                            </Col>

                        </Row>
                        <Col sm={12}>
                            <Form.Group className="mb-3" >
                                <Form.Label className="label">Description</Form.Label>
                                <Form.Control as="textarea" rows={3} name="description" value={userInputValue.description} onChange={(e) => handleChangeinputvalue(e)} />
                            </Form.Group>
                        </Col>
                        <div className="text-end  pt-2 pb-3">
                            <Button className="btn-danger button mx-2">Cancel</Button>
                            <Button className="btn-danger button" onClick={(e) => handleSubmit(e)}>Submit</Button>
                        </div>
                    </div>
                </Col>
            </Row>
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
        </Container>

    );
}
export default ProductFrom;