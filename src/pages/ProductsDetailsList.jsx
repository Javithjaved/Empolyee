import { Container, Row, Col, Card } from "react-bootstrap";
import SideBar from "../components/Sidebar";
import Header from "../components/Header";
const ProductDetailslist = ({ active, setActive, prodectslistdata }) => {
    return (
        <>
            <Container fluid className="p-0">
                <Row>
                    <Header />
                    <Col xl={2}>
                        <SideBar active={active} setActive={setActive} />
                    </Col>
                    <Col className="bg3">
                        <Row>
                            <Col>

                            </Col>
                            <Col>rgver</Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default ProductDetailslist;