import Table from 'react-bootstrap/Table';
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import axios from "axios";
import { useEffect, useState } from 'react';
import SideBar from '../components/Sidebar';
const TableDashBoradApi = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('https://fts-backend.onrender.com/admin/testing/getallusers?page=1&size=10')
        .then(response => {setData(response.data.response.paginationOutput.results)})
        .catch(err => {console.log(err);})
    },[]);
    return (
        <Container fluid className='bg3 p-0'>   
            <Header />
            <Row>
                <Col xs={2} className='sidebar1'>< SideBar /> </Col>
                <Col xs={10} >
                    <div className="row">
                        <div className="col-12 "><h5 className="label2 ms-4 mt-2">FTS User Register &#10095; <span className="text "> Add FTS User Register</span></h5>
                            <hr className=" hr9 ms-3 me-3"></hr>
                        </div>
                    </div>
                    <div className="bg4 me-3 ms-3">
                        <div className="tb ">
                            <div className="row">
                                <div className="col p-4 pe-4 pt-0 me-3 ms-3">
                                    <Table className="table table-borderless table-spacing pt-0" >
                                        <thead>
                                            <tr className="tablebox" >
                                                <th>S.No</th>
                                                <th>Name</th>
                                                <th>Email-Id</th>
                                                <th>Mobile </th>
                                                <th>Message</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                              data.map((user, index)=>{
                                                    return <tr className="tablebox" key={index}>
                                                        <td>{user.id}</td>
                                                        <td className='name'>{user.name}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.phone_number}</td>
                                                        <td>{user.message}</td>
                                                    </tr>
                                                })
                                            }
                                        </tbody>
                                    </Table>    
                                    <div className='page'>
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item"><p className="page-link" >Previous</p></li>
                                                <li className="page-item"><p className="page-link" >1</p></li>
                                                <li className="page-item"><p className="page-link" >2</p></li>
                                                <li className="page-item"><p className="page-link" >3</p></li>
                                                <li className="page-item"><p className="page-link" >Next</p></li>
                                            </ul>
                                        </nav>
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

export default TableDashBoradApi;