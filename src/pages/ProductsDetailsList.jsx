import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import SideBar from "../components/Sidebar";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import {  useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
const ProductDetailslist = ({ active, setActive }) => {
    const Navigate = useNavigate();
    const productsUserData = useSelector((state) => state.productList)
    console.log(productsUserData);
    const [showProductDetails, setShowProductsDetails] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (products) => {
        setShow(true);
        setShowProductsDetails(products)
    }

    return (
        <>
            <Container fluid className="p-0">
                <Row>
                    <Header />
                    <Col xl={2}>
                        <SideBar active={active} setActive={setActive} />
                    </Col>
                    <Col >
                        <Row>
                            {
                                Array.isArray(productsUserData.products.data) && productsUserData.products.data.map((products) => {
                                    return (
                                        <Container>
                                            <Row className="border border-2 mt-3 p-3">
                                                <Col xs={4}>
                                                    <img src={products.image} alt="Loading...." className="img ms-3" onClick={()=>handleShow(products)}></img>
                                                </Col>
                                                <Col>
                                                    <p className="mt-5 fs-5 "><span className="text"> {products.title}</span></p>
                                                    <p><span className="text">Price : ₹ </span> {Math.round(products.price)}00</p>
                                                    <p><span className="text">Rating :</span>  <span> <Icon className="i" icon="emojione:star" /> {products.rating.rate} / 5 </span></p>
                                                    <p ><span className="text">Category :</span> {products.category}</p>
                                                    <p><span className="text">Description :</span> {products.description}</p>
                                                    <div className="text-end ">
                                                        <Row>
                                                            <Col>
                                                                <Button className="me-2" variant="danger" onClick={()=>Navigate(`/product-form-edit/${products.id}`)}>Edit</Button>
                                                                <Button className="me-2" variant="danger">Delete</Button>
                                                                {/* <Button variant="danger" onClick={()=>handleShow(products)}>Show</Button> */}
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    )
                                })
                            }
                        </Row>
                        <Modal show={show} onHide={handleClose} size="lg"  >
                            <Modal.Header closeButton>
                                <Modal.Title >Products Details</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {showProductDetails !== null ? (
                                    <div className="modelbody">
                                        <div className="row">
                                            <img src={showProductDetails.image} alt="Loading...." className="img4 ms-2 mt-4 rounded-5"></img>
                                            <div className="col">
                                                <p><span className="">Products Title : </span><span className="text-primary"> {showProductDetails.title}</span></p>
                                                <p><span className="text">Price : $ </span> {showProductDetails.price}</p>
                                                <p><span className="text">Rating :</span>  <span> <Icon className="i" icon="emojione:star" /> {showProductDetails.rating.rate} / 5 </span></p>
                                                <p ><span className="text">Category :</span> {showProductDetails.category}</p>
                                                <span className="text">Description :</span> {showProductDetails.description}
                                                <div className="text-end">
                                                <Button className="me-2" variant="danger" onClick={()=>handleClose}>Cancel</Button>
                                                <Button className="me-2" variant="danger" onClick={()=>handleClose}>Ok</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : null}
                            </Modal.Body>
                            {/* <Modal.Footer className="bg3">
                                        <Link to={"/Product-From"}><Button className="btn-danger" onClick={() => product_actions()}>  Edit </Button></Link>
                                        <Link><Button className="btn-danger" onClick={() => actionsDelete(dispatch)}>Delete</Button></Link>
                                    </Modal.Footer> */}
                        </Modal>

                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default ProductDetailslist;