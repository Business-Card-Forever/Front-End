import { Container, Row } from "react-bootstrap";
// import {Form  } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import { Col } from "react-bootstrap";
import React, { Component } from 'react';
class PortfoiRege extends React.Component {
    render() {
        return (
            <>
                {/* <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" name="fullname" placeholder="Enter Full Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control name='address' placeholder="1234 Main St" />
                    </Form.Group>
                    <Form.Group controlId="formGridAbout">
                        <Form.Label>About</Form.Label>
                        <Form.Control name='About' placeholder="About About About About About" />
                    </Form.Group>


                    <Form.Group controlId="formGridAbout">
                        <Form.Label>Major</Form.Label>
                        <Form.Control name='major' placeholder="Software Engineering " />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Birthday</Form.Label>
                            <Form.Control name='Birthday' type='date' placeholder="4-10-1998 " />

                        </Form.Group>




                    </Form.Row>

                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
 */}                <Container style={{ marginLeft: '1%', marginRight: '5%' }}>
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
            </>

        );
    }


}

export default PortfoiRege;