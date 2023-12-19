import { useSelector } from "react-redux";
import { Col, Container, Row, Card, Figure } from 'react-bootstrap'
import Header from "../components/Header";
import SideBar from "../components/Sidebar";
import { Icon } from '@iconify/react';
import { useState } from "react";
const ProductList = ({ active, setActive }) => {
    const prodectslistdata = useSelector((state) => state.productList)
    console.log(prodectslistdata.products.data);
    const initialText = ""
    const [isExpanded, setExpanded] = useState(false);

    const truncatedText = isExpanded ? initialText : initialText.slice(0, 150);

    const handleReadMoreClick = () => {
        setExpanded(!isExpanded);
    };

    return (
        <>
            <Container fluid className=" p-0" >
                <Header />
                <Row>
                    <Col xl={2}><SideBar active={active} setActive={setActive} /></Col>
                    <Col className="bg3">
                        <h1 className="text-center">Products Shop</h1>
                        <div className="line me-3 ms-1">
                            <hr></hr>
                        </div>
                        <Row className="mx-2 mt-2 p-0" >
                            {
                                Array.isArray(prodectslistdata.products.data) && prodectslistdata.products.data.map((products) => {
                                    return (
                                        <Card style={{ width: '15.4rem' }} >
                                            <Col>
                                                <Card.Body className="p-0 mt-2 pb-2"  >
                                                    <Figure>
                                                        <Figure.Image
                                                            src={products.image}
                                                        />
                                                    </Figure>
                                                    {/* <Card.img>{products.img}</Card.img> */}
                                                    <div >
                                                        <Card.Title >Products Name : <span className="text-primary">{products.title}</span> </Card.Title>
                                                        <Card.Text className="mt-2 "><span className="titel">Description :</span> {products.description}
                                                            {truncatedText}
                                                            {!isExpanded && (
                                                                <span>
                                                                    <span onClick={handleReadMoreClick} className="text-primary pointer">
                                                                        Read More
                                                                    </span>
                                                                </span>
                                                            )}</Card.Text>
                                                        <Card.Text><span className="text">Price : $</span> {products.price}</Card.Text>
                                                        <Card.Text><span className="text">Rating :</span> <Icon className="i" icon="emojione:star" />  {products.rating.rate}</Card.Text>
                                                        <Card.Text> <span className="text">Category :</span> {products.category}</Card.Text>
                                                    </div>
                                                </Card.Body>
                                            </Col>

                                        </Card>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default ProductList;
