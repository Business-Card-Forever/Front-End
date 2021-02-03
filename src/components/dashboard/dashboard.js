import React from "react";
import './dashboard.css';
import placeholder from "../../img/placeholder.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons';

import { Navbar, Nav, Button, Form, Modal, Col, Row, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from '../footer/footer';
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalBtn: false,
        }
    }

    handleModal = () => {
        this.setState({ modalBtn: true });
    }

    handleModalClose = () => {
        this.setState({ modalBtn: false });
    }

    render() {

        return (
            <>
                <Navbar bg="dark" variant="dark" >
                    <Dropdown >
                        <Dropdown.Toggle variant="failed" id="dropdown-basic">
                            <img className="user-img-drop ayKelme" alt="profilePic" src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png' width="50px" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item >
                                <img className="col-img ayKelme" alt="profilePic" src='https://st.depositphotos.com/3008028/3749/i/950/depositphotos_37493071-stock-photo-abstract-grey-background.jpg' width="50px" />
                                <h5 className="username">'test'</h5></Dropdown.Item>

                            <Dropdown.Divider />
                            <Dropdown.Item className="dropItem" href="#"> <a href="#">Dashboard</a> </Dropdown.Item>
                            <Dropdown.Item className="dropItem" href="#">  <a href="#"> # </a> </Dropdown.Item>
                            <Dropdown.Item className="dropItem" href="#"> <a href="#"> # </a> </Dropdown.Item>
                            <Dropdown.Item className="dropItem" href="#"> <a href="#">  #</a> </Dropdown.Item>
                            <Dropdown.Item className="dropItem">
                                {/* <Show condition={user.loggedIn}>   <button className="dropdown-btn" onClick={user.logout}>Logout</button>   </Show>  */}
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Nav className="mr-auto">
                        <div className="home">
                            <h1 style={{ marginLeft: '200' }}>E-BCard</h1>
                        </div>
                    </Nav>

                </Navbar>

                <Container>
                    <Row>
                        <Col>
                            <div className="container1" style={{ paddingTop: 50 }}>
                                <figure>
                                    <img className="profilePic" src={placeholder} alt='image' width='230' />
                                    <figcaption style={{ paddingTop: 50 }} >
                                        <Button className='b1'> Change Picture </Button>

                                        <Button className='b1' variant="primary" onClick={this.handleModal}>Portfolio</Button>
                                        <Button className='b1' variant="success">QR Code</Button>
                                        <Button className='b1' variant="info">Connection list</Button>


                                    </figcaption>
                                </figure>
                            </div>
                        </Col>

                        <Col xs={4}>
                            <Form style={{ marginTop: 50, marginLeft: 20 }} >
                                <Form.Row>
                                    <label className='l'> Full Name</label>
                                </Form.Row>
                                <Form.Row>

                                    <Form.Control placeholder=" Mohammad Omar" className='rows' readOnly />

                                </Form.Row>

                                <Form.Row>
                                    <label className='l' > Birthday </label>
                                </Form.Row>
                                <Form.Row>

                                    <Form.Control placeholder=" 10-1-2010" className='rows' readOnly />

                                </Form.Row>

                                <Form.Row>
                                    <label className='l'> City </label>
                                </Form.Row>
                                <Form.Row>

                                    <Form.Control placeholder="Amman" className='rows' readOnly />

                                </Form.Row>
                            </Form>
                            <Form style={{ marginLeft: 20 }} >

                                <Form.Row>
                                    <label className='l'> Email </label>
                                </Form.Row>
                                <Form.Row>

                                    <Form.Control placeholder="m.omar@gmail.com" className='rows' readOnly />

                                </Form.Row>
                                <Form.Row>
                                    <label className='l' > Phone </label>
                                </Form.Row>
                                <Form.Row>

                                    <Form.Control placeholder="+962-78202024" className='rows' readOnly />

                                </Form.Row>

                                <Form.Row>
                                    <label className='l'> Major </label>
                                </Form.Row>
                                <Form.Row>

                                    <Form.Control placeholder="Software Engineering" className='rows' readOnly />

                                </Form.Row>
                            </Form>
                        </Col>
                        <Col xs={5}>

                        </Col>

                    </Row>

                </Container>


                <div className='main-con'>

                    <Container style={{ marginBottom: 100 }}>
                        <Row>
                            <Col xs={3}>




                            </Col>
                            <Col xs={6}>
                            </Col>
                            <Col>
                            </Col>
                        </Row>

                    </Container>


                    {/* <video src='../../img/bgx.mp4' width="600" height="300" controls="controls" autoplay="true" /> */}

                </div>
                <Modal show={this.state.modalBtn} centered className="modal">
                    <Modal.Header closeButton onClick={this.handleModalClose}>
                        <Modal.Title id="example-modal-sizes-title-lg" className='modalTitle'> Profile </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img className="profilePic" src="http://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png" />
                        <h2 className="fullName"> Full Name: Omar Zain </h2>
                        <h2 className="birthdate">Birthday: 20 Jan 1995 </h2>
                        <h2 className="city"> City: Amman</h2>
                        <h2 className="email">Email: 123@gmail.com</h2>
                        <h2 className="phone">Phone: +962-7985654520</h2>
                        <h2 className="major"> Major: Software Development</h2>
                    </Modal.Body>
                </Modal>



                <Footer />

            </>

        )
    }
}

export default Dashboard;