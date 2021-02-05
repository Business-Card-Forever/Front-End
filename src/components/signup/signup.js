import React from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './signup.css'

function signIn(props) {

    return (
            <Form>
                <Form.Row className="login-form">
                <Form.Group as={Col} controlId="formGridEmail" id="loginpage">
                    <Form.Label>Username</Form.Label><br/>
                    <Form.Control type="text" placeholder="Enter username" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Company Name" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Your Password" />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
                <Form.Label>Company Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
                <Form.Label>Industry</Form.Label>
                <Form.Control placeholder="Company industry" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );

}

export default signIn;