import React from 'react';
import './header.css';
import logo from '../../img/logo.png';
import { Navbar, Nav, Button, Form, Modal, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from '../login/login';
import SignUp from '../signup/signup';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginBtn: false,
            SignUpBtn: false,
            token:'',
        }
    }

    handleLogin = () => {
        this.setState({ loginBtn: true });
    }

    handleSignup = () => {
        this.setState({ SignUpBtn: true });
    }

    handleSignUpClose = () => {
        this.setState({ SignUpBtn: false });
    }

    handleLoginClose = () => {
        this.setState({ loginBtn: false });
    }

    userLogin = (tok) =>{
        this.setState({token:tok})
        console.log(this.state.token);
        
    }

    render() {
        const style = {
            color: 'white',
            width: '145px',
            textAlign: 'center',
            fontSize: '22px',
        };

        const homeStyle = {
            color: 'white',
            marginLeft: '10%',
            width: '145px',
            textAlign: 'center',
            fontSize: '22px'
        }
        
        
        return (
            <div className='header' >

                <Navbar bg="dark" variant="dark">
                    <img src={logo} className="logo" alt="logo" />

                    <Nav className="mr-auto">
                        <Nav.Link style={homeStyle} href="/">Home</Nav.Link>
                        <Nav.Link style={style} href="/">About Us</Nav.Link>
                        <Nav.Link style={style} href="/">Events</Nav.Link>
                    </Nav>

                    <Form className="loginBtn">
                        <Button onClick={this.handleLogin} variant="outline-info">Login</Button>
                    </Form>

                    <Form className="signinBtn">
                        <Button onClick={this.handleSignup} variant="outline-info">Sign Up</Button>
                    </Form>

                </Navbar>

                <div className="emptyDiv"> </div>


            
                    <Col className="zoom " xs={12} md={5} xl={5} lg={5}>
                        <div className='bgText'>
                        <h2 className="text-center h22">E-BCard</h2>
                        <h4 className="text-center" > <span> One Business Card </span><br/>Updated, Accessible, Available  <br/> For Ever</h4>
                        </div>
                    </Col>


                
                <Modal show={this.state.loginBtn} centered className="loginModal">
                    <Modal.Header closeButton onClick={this.handleLoginClose}>
                        <Modal.Title id="example-modal-sizes-title-lg" className='modalTitle'> Login </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Login userLogin={this.userLogin} />
                    </Modal.Body>
                </Modal>


                <Modal show={this.state.SignUpBtn} centered className="signupModal">
                    <Modal.Header closeButton onClick={this.handleSignUpClose}>
                        <Modal.Title id="example-modal-sizes-title-lg" className='modalTitle'> Sign Up </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <SignUp />
                    </Modal.Body>
                </Modal>
                
                <div className="dash-emptyDiv"></div>

            </div>
        )

    }
}

export default Header;


