import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import { Pagination } from 'react-bootstrap';
import SideBar from '../components/Sidebar';
const FTSReisterDashBoard = ({ active, setActive }) => {
    const [data, setData] = useState([]);
    const totalPages=5;
    const [currentPage, setCurrentPage] = useState(1);
    const handleList = () => {
        axios.get(`https://fts-backend.onrender.com/admin/testing/getallusers?page=${currentPage}&size=${totalPages}`)
            .then(response => { setData(response.data.response.paginationOutput.results); })
            .catch(err => { console.log(err); })
    }
    const handleDelete = (id) => {
        axios.delete(`https://fts-backend.onrender.com/admin/testing/deleteUserById?id=${id}`)
            .then(response => { console.log("Delete successful", response); handleList(); })
            .catch(err => { console.log('Error deleting data', err); })
    }
    
    useEffect(() => {
        handleList([]);
    }, [currentPage]);
    return (
        <Container fluid className='bg3 p-0'>
            <Header />
            <Row>
                <Col xs={2} className='sidebar1'><SideBar active={active} setActive={setActive} /></Col>
                <Col xs={10}>
                    <div className="row">
                        <div className="col-12 "><h5 className="label2 ms-4 mt-2">FTS User Register &#10095; <span className="text "> FTS DashBoard User Register</span></h5>
                            <hr className=" hr9 ms-3 me-3"></hr>
                        </div>
                    </div>
                    <div className="bg4 me-3 ms-3">
                        <div className="tb">
                            <div className="row">
                                <div className="col p-4 pe-4 pt-0 me-3 ms-3">
                                    <Table className="table table-borderless table-spacing pt-0" responsive>
                                        <thead>
                                            <tr className="tablebox" >
                                                <th>S.No</th>
                                                <th>Name</th>
                                                <th>Email-Id</th>
                                                <th>Mobile</th>
                                                <th>Message</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((user, index) => (
                                                <tr className="tablebox" key={index}>
                                                    <td>{index + 1}</td>
                                                    <td className='name'>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.phone_number}</td>
                                                    <td>{user.message}</td>
                                                    <td>
                                                        <Link to={`/fts-edit-user/${user.id}`}>
                                                            <span className="i"><Icon className="i" icon="nimbus:edit" /></span>
                                                        </Link>
                                                        <span className="vr ms-1"></span>
                                                        <Link>
                                                            <span>
                                                                <Icon className="i ms-1" onClick={() => handleDelete(user.id)} icon="pajamas:remove" />
                                                            </span>
                                                        </Link>
                                                        <span className="vr ms-1"></span>
                                                        <Link to={"/card"}>
                                                            <Icon className="i ms-1" icon="bxs:show" />
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                    <div className='page'>
                                        <Pagination>
                                            <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} />
                                            {Array.from({ length: totalPages }, (_, index) => (
                                                <Pagination.Item
                                                    key={index + index}
                                                    active={index + 1 === currentPage}
                                                    onClick={() => setCurrentPage(index + 1)}
                                                >
                                                    {index + 1}
                                                </Pagination.Item>
                                            ))}
                                            <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} />
                                        </Pagination>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default FTSReisterDashBoard;
