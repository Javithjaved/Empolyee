import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import SideBar from '../components/Sidebar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const FTSReisterDashBoard = ({ active, setActive }) => {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [userdata, setUserData] = useState(null);
    const page = 5;
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [ShowDataDelete, setShowDataDelete] = useState(false);
    axios.interceptors.request.use(
        (config) => {
            const accessToken = localStorage.getItem('accessToken');
            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
    axios.interceptors.response.use(
        (response) => {
            if (response.status === 200) {
                console.log(response.data);
            }
            return response;
        },
        (error) => {
            if (error.response === 401) {
                console.log('Error....');
            }
            return Promise.reject(error);
        }
    );

    const handleList = (currentPage) => {
        axios({
            method: 'get',
            url: `https://fts-backend.onrender.com/admin/testing/getallusers?page=${currentPage}&size=${page}`,
        })
            .then((response) => {
                let totalPage = response.data.response.paginationOutput.totalResults;
                setData(response.data.response.paginationOutput.results);
                setPageCount(Math.ceil(totalPage / page));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleDelete = (id, user) => {
        axios({
            method: 'delete',
            url: `https://fts-backend.onrender.com/admin/testing/deleteUserById?id=${id}`,
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
        handleList();
    }, [currentPage]);
    const handleClose = () => setShow(false);
    return (
        <Container fluid className="bg3 p-0">
            <Header />
            <Row>
                <Col xs={2} className="sidebar1">
                    <SideBar active={active} setActive={setActive} />
                </Col>
                <Col xs={10}>
                    <div className="row">
                        <div className="col-12 ">
                            <h5 className="label2 ms-4 mt-2">
                                FTS User Register &#10095;
                                <span className="text "> FTS DashBoard User Register</span>
                            </h5>
                            <hr className=" hr9 ms-3 me-3"></hr>
                            <ToastContainer />
                        </div>
                    </div>
                    <div className="bg4 me-3 ms-3">
                        <div className="tb">
                            <div className="row">
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
                                                    const serialNumber = (currentPage - 1) * page + index + 1;
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
                                    <Modal show={ShowDataDelete} onHide={handleDeleteClose} className='Model' >
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
                                                        <label className="label" for="FirstName mt-1">
                                                            Name :
                                                        </label>
                                                        <p className="firstname1 fw-medium mt-2 ">{userdata.name}</p>
                                                    </div>
                                                    <div className="col-6">
                                                        <label className="label" for="LastName mt-1">
                                                            Email-ID :
                                                        </label>
                                                        <p className="lastname1 fw-medium mt-2">{userdata.email}</p>
                                                    </div>
                                                    <div className="col-6">
                                                        <label className="label" for="FirstName mt-1">
                                                            Mobile :
                                                        </label>
                                                        <p className="firstname1 fw-medium mt-2">{userdata.phone_number}</p>
                                                    </div>
                                                    <div className="col-6">
                                                        <label className="label" for="LastName mt-1">
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
                                            nextLabel="next >>"
                                            onPageChange={handlePageClick}
                                            pageCount={pageCount}
                                            previousLabel="<<previous"
                                            breakLabel={"..."}
                                            breakClassName={"page-link"}
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
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default FTSReisterDashBoard;
