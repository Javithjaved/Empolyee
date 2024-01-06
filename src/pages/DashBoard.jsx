import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Button, Col } from "react-bootstrap";

const DashBoard = ({ inputArr, active, setActive, isSignedIn, setIsSignedIn }) => {
    const Navigate = useNavigate();
    const [dataDelete, setDataDelete] = useState(inputArr);

    const handleDelete = (index) => {
        const updatedData = [...dataDelete];
        updatedData.splice(index, 1);
        setDataDelete(updatedData);
    };

    useEffect(() => {
        console.log("inputArr updated:", dataDelete);
    }, [dataDelete]);

    return (
        <div>
            <div className="bg1">
                <Header isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
                <div className="row">
                    <div className="col-2 sidebar1">
                        <Sidebar active={active} setActive={setActive} />
                    </div>
                  
                    <div className="col-10 mt-2">
                        <div className="row">
                            <div className="col-12">
                                <h5 className="text-danger ms-4 mt-2">DashBoard</h5>
                                <hr className=" ms-4 me-3"></hr>
                            </div>
                        </div>
                        <div className="bg4 p-4 pe-4 pt-0 me-3 ms-3 mt-3">
                            <div className="row">
                                <Col xs={12}>
                                    <div className="text-end mb-3 mt-2 ">
                                        <span className="add">
                                            <Button variant='danger' onClick={() => Navigate("/employee")}>
                                                <div>
                                                    <Icon icon="zondicons:add-solid" /> <span > Add </span>
                                                </div>
                                            </Button>
                                        </span>
                                    </div>
                                </Col>
                            </div>
                            <div className="tb">
                                <div className="row">
                                    <div className="col">
                                        <table className="table table-borderless table-spacing p-1 pt-0">
                                            <thead>
                                                <tr className="tablebox">
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email-Id</th>
                                                    <th scope="col">Mobile No</th>
                                                    <th scope="col">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {dataDelete.map((val, i) => (
                                                    <tr className="tablebox" key={i}>
                                                        <td className="name">{val.firstName}</td>
                                                        <td>{val.emailId}</td>
                                                        <td>{val.mobile}</td>
                                                        <td>
                                                            <span className="i" onClick={() => Navigate("/Employee")}>
                                                                <Icon className="i" icon="nimbus:edit" />
                                                            </span>
                                                            <span className="vr ms-1"></span>
                                                            <span onClick={() => handleDelete(i)}>
                                                                <Icon className="i ms-1" icon="pajamas:remove" />
                                                            </span>
                                                            <span className="vr ms-1"></span>
                                                            <Icon className="i ms-1" onClick={() => Navigate("/Card")} icon="bxs:show" />
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
