import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { Icon } from '@iconify/react';
import { Link, useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import SideBar from '../components/Sidebar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Spinner } from 'react-bootstrap';

const FTSReisterDashBoard = ({ active, setActive, isSignedIn, setIsSignedIn }) => {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const Navigate = useNavigate();
    const [userdata, setUserData] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [ShowDataDelete, setShowDataDelete] = useState(false);
    const [showContent, setShowContent] = useState("");
    const deleteapi = process.env.REACT_APP_DELETEAPI;
    const geturlapi = process.env.REACT_APP_GETALLAPI
    const handleList = (currentPage) => {
        axios({
            method: "get",
            url: geturlapi,
            params: {
                page: currentPage,
                size: 5,
            },
        })
            .then((response) => {
                let totalPage = response.data.response.paginationOutput.totalResults;
                setData(response.data.response.paginationOutput.results);
                setPageCount(Math.ceil(totalPage / 5));
                if (response.status === 200) {
                    setShowContent("false")
                }
            })
            .catch((err) => {
                console.log(err);
                if (err.status) {
                    setShowContent("true")
                }
            });
    };
    const handleDelete = (id, user) => {
        axios({
            method: "delete",
            url: `${deleteapi}id=${id}`
        })
            .then((response) => {
                console.log('Delete successful', response);
                handleList(currentPage);
                setShowDataDelete(false);
                setUserData(user);
                toast.error('Delete Success...');
            })
            .catch((err) => {
                console.log('Error deleting data', err);
            });
    };

    const handlePageClick = (data) => {
        setCurrentPage(data.selected + 1);
        handleList(data.selected + 1);
    };

    const handleDeleteshow = (id) => {
        setShowDataDelete(true);
        const user = data.find((user) => user.id === id);
        setUserData(user);
    };

    const handleDeleteClose = () => setShowDataDelete(false);
    const handleShow = (user) => {
        setShow(true);
        setUserData(user);
    };
    useEffect(() => {
        handleList(currentPage);
    }, [currentPage]);
    const handleClose = () => setShow(false);
    if (!showContent) {
        return (
            <div>
                <Header />
                <Row>
                    <Col xs={2}><SideBar active={active} setActive={setActive} /></Col>
                    <Col xs={10}>
                        <Row>
                            <Col xs={12} className='backgroundcolor'>
                                <h5 className="label2 ms-4 ">
                                    <h5 className="text-danger mt-3"> FTS DashBoard</h5>
                                </h5>
                                <hr className=" hr9 ms-3 me-3"></hr>
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
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
    return (

        <Container fluid className="bg1 p-0">
            <Header isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
            <Row>
                <Col xs={2} className="sidebar1">
                    <SideBar active={active} setActive={setActive} />
                </Col>
                <Col xs={10}>
                    <div className="row">
                        <div className="col-12 p-3">
                            <h5 className="label2 ms-4 ">
                                <h5 className="text-danger"> FTS DashBoard</h5>
                            </h5>
                            <hr className=" hr9 ms-3 me-3"></hr>
                        </div>
                    </div>
                    <div className="bg4 me-3 ms-3">
                        <div className="tb">
                            <div className="row">
                                <Col xs={12}>
                                    <div className=" pe-4 text-end mb-3 mt-2 ">
                                        <span className="add">
                                            <Button variant='danger' onClick={() => Navigate("/fts-new-user")}>
                                                <div>
                                                    <Icon icon="zondicons:add-solid" /> <span > Add </span>
                                                </div>
                                            </Button>
                                        </span>
                                    </div>
                                </Col>

                                <div className="col p-4 pe-4 pt-0 me-3 ms-3">

                                    <Table className="table table-borderless table-spacing pt-0" responsive>
                                        <thead>
                                            <tr className="tablebox">
                                                <th>S.No</th>
                                                <th>Name</th>
                                                <th>Email-Id</th>
                                                <th>Mobile</th>
                                                <th>Message</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Array.isArray(data) &&
                                                data.map((user, index) => {
                                                    const serialNumber = (currentPage - 1) * 5 + index + 1;
                                                    return (
                                                        <tr className="tablebox" key={index}>
                                                            <td>{serialNumber}</td>
                                                            <td className="name">{user.name}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.phone_number}</td>
                                                            <td>{user.message}</td>
                                                            <td>
                                                                <Link to={`/fts-edit-user/${user.id}`}>
                                                                    <span className="i">
                                                                        <Icon className="i" icon="nimbus:edit" />
                                                                    </span>
                                                                </Link>
                                                                <span className="vr ms-1"></span>
                                                                <Link>
                                                                    <span>
                                                                        <Icon
                                                                            className="i ms-1"
                                                                            icon="pajamas:remove"
                                                                            onClick={() => handleDeleteshow(user.id)}
                                                                        />
                                                                    </span>
                                                                </Link>
                                                                <span className="vr ms-1"></span>
                                                                <Link onClick={() => handleShow(user)}>
                                                                    <Icon className="i ms-1" icon="bxs:show" />
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                        </tbody>
                                    </Table>
                                    <Modal show={ShowDataDelete} onHide={handleDeleteClose} className="Model">
                                        <Modal.Header closeButton>
                                            <Modal.Title>Delete</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>Delete User data</Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="outline-danger" onClick={handleDeleteClose}>
                                                Cancel
                                            </Button>
                                            <Button variant="danger" onClick={() => handleDelete(userdata.id, userdata)}>
                                                Delete
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                    <Modal show={show} onHide={handleClose} size="lg" className="Model">
                                        <Modal.Header closeButton>
                                            <Modal.Title>User Register Data</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body className="bg3 ">
                                            {userdata !== null ? (
                                                <div className="row">
                                                    <div className="col-6">
                                                        <label className="label" htmlFor="FirstName mt-1">
                                                            Name :
                                                        </label>
                                                        <p className="firstname1 fw-medium mt-2 ">{userdata.name}</p>
                                                    </div>
                                                    <div className="col-6">
                                                        <label className="label" htmlFor="LastName mt-1">
                                                            Email-ID :
                                                        </label>
                                                        <p className="lastname1 fw-medium mt-2">{userdata.email}</p>
                                                    </div>
                                                    <div className="col-6">
                                                        <label className="label" htmlFor="FirstName mt-1">
                                                            Mobile :
                                                        </label>
                                                        <p className="firstname1 fw-medium mt-2">{userdata.phone_number}</p>
                                                    </div>
                                                    <div className="col-6">
                                                        <label className="label" htmlFor="LastName mt-1">
                                                            Message :
                                                        </label>
                                                        <p className="lastname1 fw-medium mt-2">{userdata.message}</p>
                                                    </div>
                                                </div>
                                            ) : null}
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="outline-danger" onClick={handleClose}>
                                                Cancel
                                            </Button>
                                            <Button className=" btn-danger" onClick={handleClose}>
                                                Save
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                    <div className="page">
                                        <ReactPaginate
                                            nextLabel="Next >"
                                            onPageChange={handlePageClick}
                                            pageCount={pageCount}
                                            previousLabel="< Previous"
                                            breakLabel={'...'}
                                            breakClassName={'page-link'}
                                            containerClassName={'pagination'}
                                            pageClassName={'page-item'}
                                            pageLinkClassName={'page-link'}
                                            previousClassName={'page-item'}
                                            previousLinkClassName={'page-link'}
                                            nextClassName={'page-item'}
                                            nextLinkClassName={'page-link'}
                                            activeClassName={'active'}
                                        />
                                    </div>
                                </div>
                            </div>
                            <ToastContainer />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default FTSReisterDashBoard;
