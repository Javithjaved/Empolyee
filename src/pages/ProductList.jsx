import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Button, Modal, Col, Row, Spinner } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { Link, useNavigate } from 'react-router-dom';
import { actionsDelete } from '../redux/actions/actionsDelete';
import Card from 'react-bootstrap/Card';
import Header from '../components/Header';
import SideBar from '../components/Sidebar';
import { product_actions } from '../redux/actions/actions';

const ProductList = ({ active, setActive, productid, isSignedIn, setIsSignedIn }) => {
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const productListData = useSelector((state) => state.productList);
    const [show, setShow] = useState(false);
    const [userProducts, setUserProducts] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = (products) => {
        setShow(true);
        setUserProducts(products);
    };
    const handleTitleClick = (productid) => {
        Navigate(`/product-detail/${productid}`);
    };
    useEffect(() => {
        product_actions(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        actionsDelete(dispatch, id);
    };

    if (!productListData.products.data) {
        return (
            <div>
                <Header />
                <Row>
                    <Col xs={2}><SideBar active={active} setActive={setActive} /></Col>
                    <Col xs={10}>
                        <div className='backgroundcolor'>
                            <h4 className="text-danger ms-3 "> Product Shop</h4>
                            <div className='ms-3 me-3'>
                                <hr></hr>
                            </div>
                            <div className='text-center mt-4'>
                                <Button variant="dark" className='Edit' >
                                    <Spinner
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    <span> Loading <Icon icon="svg-spinners:3-dots-bounce" /></span>
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
    return (
        <>
            <Container fluid className="p-0">
                <Header isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
                <Row>
                    <div className="col-2">
                        <SideBar active={active} setActive={setActive} />
                    </div>
                    <div className="col-10 bg1 p-3">
                        <h4 className="text-danger ms-3 "> Product Shop</h4>
                        <div className='ms-3 me-3'>
                            <hr></hr>
                        </div>
                        <div >
                            <Row>
                                <Col>
                                    <div className=" pe-3 text-end mb-3 ">
                                        <span className="add">
                                            <Button variant='danger' onClick={() => Navigate("/product-form")}>
                                                <div>
                                                    <Icon icon="zondicons:add-solid" /> <span  > Add Product</span>
                                                </div>
                                            </Button>
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="d-flex">
                            <Row>
                                {Array.isArray(productListData.products.data) && productListData.products.data.map((products) => (
                                    <Card key={products.id} className="productsdetails">
                                        <img src={products.image} alt="Loading...." className="img4 ms-5 mt-4" onClick={() => handleShow(products)}></img>
                                        <Card.Body>
                                            <Container>
                                                <Row>
                                                    <span className="titel text-truncate" onClick={() => handleTitleClick(products.id)}>
                                                        {products.title}
                                                    </span>
                                                    <Row>
                                                        <Col className="p-3">
                                                            <span className="text">Price : ₹</span> {Math.round(products.price)}00
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
                                ))}
                            </Row>
                        </div>
                        <div className="models">
                            <Modal show={show} onHide={handleClose} size="md" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Products Details</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {userProducts !== null ? (
                                        <div className="modelbody">
                                            <div className="row">
                                                <img src={userProducts.image} alt="Loading...." className="img4 ms-2 mt-4 rounded-5"></img>
                                                <div className="col">
                                                    <p><span className=" text">Products Title : </span><span className="text-primary"> {userProducts.title}</span></p>
                                                    <p><span className="text">Price : $ </span> {userProducts.price}</p>
                                                    <p><span className="text">Rating :</span>  <span> <Icon className="i" icon="emojione:star" /> {userProducts.rating.rate} / 5 </span></p>
                                                    <p ><span className="text">Category :</span> {userProducts.category}</p>
                                                    <span className="text">Description :</span> {userProducts.description}
                                                </div>
                                            </div>
                                        </div>
                                    ) : null}
                                </Modal.Body>
                                <Modal.Footer>
                                    <Link to={`/product-form-edit/${productid}`} ><Button className="btn-danger"  >  Edit </Button></Link>
                                    <Link><Button className="btn-danger" onClick={() => handleDelete(userProducts.id)}>Delete</Button></Link>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </Row>
            </Container>

        </>
    );
};

export default ProductList;
