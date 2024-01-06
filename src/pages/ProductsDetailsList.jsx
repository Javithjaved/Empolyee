import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Spinner, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import { useNavigate, useParams } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import SideBar from '../components/Sidebar';
import Header from '../components/Header';
import { singleproductlist } from '../redux/actions/singleproductlist';
import { toast, ToastContainer } from 'react-toastify';
const ProductDetailslist = ({ active, setActive, isSignedIn, setIsSignedIn }) => {
  const [showContent, setShowContent] = useState(false);
  const dispatch = useDispatch();
  const singleproductListdata = useSelector((state) => state.productList);
  const Navigate = useNavigate();
  const params = useParams();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      await singleproductlist(params.id, dispatch);
      setTimeout(() => {
        setShowContent(true);
      }, 1000);
    };
    fetchData();
  }, [params.id, dispatch]);
  if (!singleproductListdata.products_list || !singleproductListdata.products_list.data || !showContent) {
    return (
      <div>
        <Header />
        <Row>
          <Col xs={2}><SideBar active={active} setActive={setActive} /></Col>
          <Col xs={10}>
          <Col className='backgroundcolor'>
            <h5 className="label2">
              <span className='pointer p-2' onClick={() => Navigate("/table-fts-dashborad")}>Products List </span>   &#10095; <span className="text"> Product Detail</span>
            </h5>
            <hr></hr>
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
                  </Col>
          </Col>
        </Row>
      </div>
    );
  }
  const { image, title, price, rating, category, description } = singleproductListdata.products_list.data;
  const handleClose = () => {
    setShow(false);
    toast.success("Products Success Order");
    setTimeout(() => {
      Navigate('/product-list');
    }, 2000);
  };
  const handleCancel = () => {
    setShow(false);
      toast.warning("Products Are Cancel");
  };
  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      <Header isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
      <Container fluid>
        <Row>
          <Col xs={2}><SideBar active={active} setActive={setActive}/></Col>
          <Col className='backgroundcolor'>
            <h5 className="label2 mt-2">
              <span className='pointer' onClick={() => Navigate("/table-fts-dashborad")}>Products List </span>   &#10095; <span className="text"> Product Detail</span>
            </h5>
            <hr></hr>
            <Row className='personal rounded-2 ms-2 p-2 me-2'>
              <Col xs={4} >
              <img src={image} alt="Loading...." className="img1" />
              </Col>
              <Col className='ms-4'>
              <Row>
          <p className="fs-3 mt-5">{title}</p>
          <p className="fs-6">
            <span className="text">Price : ₹</span> {Math.round(price)}00
          </p>
          <p className="fs-6">
            <span className="text">Rating :</span>
            <Icon className="i" icon="emojione:star" /> {rating.rate} / 5
          </p>
          <p className="fs-6">
            <span className="text">Category :</span> {category}
          </p>
          <p className="fs-6">
            <span className="text">Count : </span>
            {rating.count}
          </p>
          <p className="fs-6">
            <span className="text">Description :</span>
            {description}
          </p>
        </Row>
        <Col className="text-center mt-2">
          <Button variant="danger" className="Edit me-2" onClick={() => Navigate('/product-list')}>
            Cancel
          </Button>
          <Button variant="danger " className="Edit" onClick={handleShow}>
            Buy Now
          </Button>
        </Col>
              </Col>
            </Row>
          </Col>

        </Row>
      </Container>
      <Modal className="model" show={show} onHide={handleClose} centered>
        <Modal.Body className=" text-center">
          <Icon className="iconsuccess fs-1" icon="ep:success-filled" />
          <p className="fs-3">Thank You!!</p>
          <p>Your submission Products is received and we will contact you soon...</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose} >
            Ok
          </Button>
        </Modal.Footer>
      </Modal>

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

export default ProductDetailslist;
