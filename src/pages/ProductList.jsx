import { useSelector } from "react-redux";
import { Container, Button, Modal, Col, Row, Spinner } from 'react-bootstrap'
import Header from "../components/Header";
import SideBar from "../components/Sidebar";
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { product_actions } from "../redux/actions/actions";
import { actionsDelete } from "../redux/actions/actionsDelete";
import Card from 'react-bootstrap/Card';
import axios from "axios";
const ProductList = ({ active, setActive, dispatch,products}) => {
    const Navigate = useNavigate();
    const prodectslistdata = useSelector((state) => state.productList)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (products) => {
        setShow(true);
        setUserProducts(products)
    }
    const [spinner, setSpinner] = useState(true);
    const [userProducts, setUserProducts] = useState(null);
    const handleTitleClick = (products) => {
        Navigate(`/product-detail/${products.id}`)
    }
    useEffect(() => {
        const product_actions = async (dispatch) => {
            try {
                await axios.get("https://fakestoreapi.com/products")
                product_actions(dispatch);
            } catch (error) {
                console.error(error);
            } finally {

                setSpinner(false);
            }
        };
        product_actions();
    }, []);
    return (
        <>
            <Container fluid className="p-0">
                <Header className="p-0" />
                <div >
                    <div className="row">
                        <div className="col-2"><SideBar active={active} setActive={setActive} /></div>
                        <div className="col-10 bg3 p-3">
                            <h4 className="text-danger ms-1 ">
                                Products Shop
                            </h4>
                            <div className="line me-3 ms-2 ">
                                <hr></hr>
                            </div>
                            {spinner ? (
                                <div className="overlay d-flex justify-content-center align-items-center mb-4">
                                    <Spinner animation="border" className="spin" />
                                </div>
                            ) : (
                                <div className="d-flex">
                                    <Row >
                                        {
                                            Array.isArray(prodectslistdata.products.data) && prodectslistdata.products.data.map((products) => {
                                                return (
                                                    <Card className="productsdetails" >
                                                        <img src={products.image} alt="Loading...." className="img4 ms-5 mt-4 " onClick={() => handleShow(products)}></img>
                                                        <Card.Body>
                                                            <Container>
                                                                <Row>
                                                                    <span className="titel text-truncate" onClick={()=>handleTitleClick(products)} >
                                                                        {products.title}
                                                                    </span>
                                                                    <Row>
                                                                        <Col className="p-3">
                                                                            <span className="text">Price : ₹</span> {Math.round(products.price)}
                                                                        </Col>
                                                                    </Row>
                                                                    <Row>
                                                                        <Col>
                                                                            <span className="text">Rating :</span> <Icon className="i" icon="emojione:star" /> <span>{products.rating.rate} / 5 </span>
                                                                        </Col>
                                                                    </Row>
                                                                </Row>
                                                            </Container>
                                                        </Card.Body>
                                                    </Card>
                                                )
                                            })
                                        }
                                    </Row>
                                </div>
                            )}
                            <div className="models">
                                <Modal show={show} onHide={handleClose} size="xl"   >
                                    <Modal.Header closeButton>
                                        <Modal.Title >Products Details</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        {userProducts !== null ? (
                                            <div className="modelbody">
                                                <div className="row">
                                                    <img src={userProducts.image} alt="Loading...." className="img4 ms-2 mt-4 rounded-5"></img>
                                                    <div className="col">
                                                        <p><span className="d-inline-block text-truncate">Products Title : </span><span className="text-primary"> {userProducts.title}</span></p>
                                                        <p><span className="text">Price : $ </span> {userProducts.price}</p>
                                                        <p><span className="text">Rating :</span>  <span> <Icon className="i" icon="emojione:star" /> {userProducts.rating.rate} / 5 </span></p>
                                                        <p ><span className="text">Category :</span> {userProducts.category}</p>
                                                        <span className="text">Description :</span> {userProducts.description}
                                                    </div>
                                                </div>
                                            </div>
                                        ) : null}
                                    </Modal.Body>
                                    <Modal.Footer className="bg3">
                                        <Link to={"/Product-From"}><Button className="btn-danger" onClick={() => product_actions()}>  Edit </Button></Link>
                                        <Link><Button className="btn-danger" onClick={() => actionsDelete(dispatch)}>Delete</Button></Link>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </Container >
        </>
    )
}
export default ProductList;
