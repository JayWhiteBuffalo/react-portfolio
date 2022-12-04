import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const Footer = () => {

    return(
    <Container className="footer">
        <Row c2lassName="primary">
            <Col md='4'>
            <p> This site was made by : Jay White</p>
            </Col>
            <Col md="4" className="links">
                <ul>
                    <li>
                        <p>github</p>
                    </li>
                    <li>
                        <p>linkden</p>
                    </li>
                    <li>
                        <p>Buy me a Coffee</p>
                    </li>
                </ul>
            </Col>
        </Row>
    </Container>

    )
}

export default Footer;