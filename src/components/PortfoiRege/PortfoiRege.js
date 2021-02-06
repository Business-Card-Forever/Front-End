import { Container, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import { Col } from "react-bootstrap";
import React, { Component } from 'react';
import Footer from "../footer/footer";
import Header from "../header/header";
class PortfoiRege extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Container style={{ marginLeft: '1%', marginRight: '5%' }}>
                    <Col>
                        <Row sm={2} style={{ marginLeft: 150, paddingBottom: 20 }}>
                            <Form.Label>Full Name</Form.Label>

                        </Row>
                        <Row sm={4} style={{ marginLeft: 150, paddingBottom: 20 }}> <Form.Label>Email</Form.Label>
                        </Row>
                        <Row style={{ marginLeft: 150, paddingBottom: 20 }} sm={4}><Form.Label>Address</Form.Label></Row>
                        <Row style={{ marginLeft: 150, paddingBottom: 20 }} sm={4}><Form.Label>About</Form.Label></Row>
                        <Row style={{ marginLeft: 150, paddingBottom: 20 }} sm={4}><Form.Label>Major</Form.Label>
                        </Row>
                        <Row style={{ marginLeft: 150, paddingBottom: 20 }} sm={4}> <Form.Label>Birthday</Form.Label>
                        </Row>
                        <Row style={{ marginLeft: 200, paddingBottom: 20 }} sm={4}> <Form.Label><Button variant="primary" type="submit">Submit</Button></Form.Label>
                        </Row>

                    </Col>
                    <Col>
                        <Row style={{ marginLeft: -200, paddingBottom: 20 }} sm={2}><Form.Control type="text" name="fullname" placeholder="Enter Full Name" /></Row>
                        <Row style={{ marginLeft: -200, paddingBottom: 20 }} sm={2}><Form.Control name='email' type="email" placeholder="Enter email" /></Row>
                        <Row style={{ marginLeft: -200, paddingBottom: 20 }} sm={2}> <Form.Control name='address' placeholder="1234 Main St" /> </Row>
                        <Row style={{ marginLeft: -200, paddingBottom: 20 }} sm={2}><Form.Control name='About' placeholder="About About About About About" /></Row>
                        <Row style={{ marginLeft: -200, paddingBottom: 20 }} sm={2}><Form.Control name='major' placeholder="Software Engineering " /></Row>
                        <Row style={{ marginLeft: -200, paddingBottom: 20 }} sm={2}>                            <Form.Control name='Birthday' type='date' placeholder="4-10-1998 " />
                        </Row>

                    </Col>
                </Container>
                <Footer />
            </>

        );
    }
}

export default PortfoiRege;