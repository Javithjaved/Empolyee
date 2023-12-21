import { Container, Col, Row, Button } from "react-bootstrap";
import SideBar from "../components/Sidebar";
import Header from "../components/Header";
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { actionspostapi } from "../redux/actions/actionspostapi";
import { useDispatch } from "react-redux";
const ProductFrom = ({ active, setActive }) => {
    const Navigate = useNavigate();
    const dispatch = useDispatch()
    const [userInputValue, setuserInputValue] = useState({
        title: "",
        ProductsName: "",
        Price: "",
        Rating: "",
        Category: "",
        Description: "",
    })
    const handleChangeinputvalue = (e) => {
        setuserInputValue({ ...userInputValue, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        Navigate("/product-list")
        actionspostapi(dispatch, userInputValue);
    }
    return (
        <Container fluid className="p-0">
            <Header />
            <Row>
                <Col xs={2}><SideBar active={active} setActive={setActive} /></Col>
                <Col className="bg3 p-3">
                    <h4 className="text ms-1 ">
                        Products From
                    </h4>
                    <div className="line me-3 ms-1">
                        <hr></hr>
                    </div>
                    <Form.Group className="mb-3" >
                        <Form.Label className="label">Title</Form.Label>
                        <Form.Control type="text" name="title" value={userInputValue.title} onChange={(e) => handleChangeinputvalue(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label className="label">Products Name</Form.Label>
                        <Form.Control type="text" name="ProductsName" value={userInputValue.ProductsName} onChange={(e) => handleChangeinputvalue(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label className="label">Price</Form.Label>
                        <Form.Control type="text" name="Price" value={userInputValue.Price} onChange={(e) => handleChangeinputvalue(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label className="label">Rating</Form.Label>
                        <Form.Control type="text" name="Rating" value={userInputValue.Rating} onChange={(e) => handleChangeinputvalue(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label className="label">Category  </Form.Label>
                        <Form.Control type="text" name="Category" value={userInputValue.Category} onChange={(e) => handleChangeinputvalue(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label className="label">Image</Form.Label>
                        <Form.Control type="text" name="title" value={userInputValue.image} onChange={(e) => handleChangeinputvalue(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label className="label">Description</Form.Label>
                        <Form.Control as="textarea" rows={3} name="Description" value={userInputValue.Description} onChange={(e) => handleChangeinputvalue(e)} />
                    </Form.Group>
                    <div className="text-end mb-2 ">
                        <Button className="btn-danger submit mx-2">Cancel</Button>
                        <Button className="btn-danger submit" onClick={(e) => handleSubmit(e)}>Submit</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
export default ProductFrom;