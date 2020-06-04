import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Compressor.css";
import Handler from "./Handler/Handler";

function Compressor(){
    return(
        <Container>
            <Header />
            <Handler />
            <Footer/>
        </Container>
    )
}

function Header(){
    return(
        <Row>
            <Col>
                <h1 className="display-4 text-center m-5 text-info font-weight-bolder">Img Compressor</h1>
            </Col>
        </Row>
    )
}

function Footer(){
    return(
            <Row className="mt-5">
                <Col>
                    <small className="text-muted text-center">Img Compressor</small>
                </Col>
                <Col>
                    <p className="text-center"><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />2020</p>
                </Col>
            </Row>
    )
}

export default Compressor;