import React from "react";
import './dashboard_c.css';
import placeholder from "../../img/image.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Header from '../header/header.js';
import { Navbar, Nav, Button, Form, Modal, Col, Row, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from '../footer/footer';
class DashboardCompany extends React.Component {
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
                <Header />
                <Container>
                    <Row>
                        <Col>

                            <img className="profilePic" src={placeholder} alt='image' style={{ marginLeft: 170, marginTop: 90 }} width='150' />
                            <Button className='b1'> Change Picture </Button>
                            <Button className='b1' >Create Events</Button>


                        </Col>

                        <Col xs={4}>
                            <Form style={{ marginTop: 80, paddingLeft: 50 }} >
                                <Form.Row>
                                    <label className='l'> Company Name </label>
                                </Form.Row>
                                <Form.Row>

                                    <Form.Control placeholder=" ASAC" name='company_name' className='rows' name='Number of employee' />

                                </Form.Row>

                                <Form.Row>
                                    <label className='l' >  Company Address </label>
                                </Form.Row>
                                <Form.Row>

                                    <Form.Control placeholder=" amman-jordan" name='company_address' className='rows' name='Number of employee' />

                                </Form.Row>

                                <Form.Row>
                                    <label className='l'> Industry </label>
                                </Form.Row>
                                <Form.Row>

                                    <Form.Control placeholder="Information Technology" name='industry' className='rows' name='Number of employee' />

                                </Form.Row>

                                <Form.Row>
                                    <label className='l'> Email </label>
                                </Form.Row>
                                <Form.Row>

                                    <Form.Control placeholder="asac.ltuc@gmail.com" name='email' className='rows' name='Number of employee' />

                                </Form.Row>
                            </Form>

                        </Col>
                        <Col xs={4}>
                            <Form style={{ marginTop: 80 }} >

                                <Form.Row>
                                    <label className='l' > About Company </label>
                                </Form.Row>
                                <Form.Row>

                                    <Form.Control placeholder="jhjfhjfjfhfj" name='about_company' className='rows' name='Number of employee' />

                                </Form.Row>
                                <Form.Row>
                                    <label className='l' > Number of employee </label>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Control placeholder="4-50" className='rows' name='number_of_employee' />
                                </Form.Row>
                                <Form.Row>
                                    <label className='l' > Lunch Date  </label>
                                </Form.Row>
                                <Form.Row>

                                    <Form.Control placeholder="4-10-1998" name='lunch_date' type='date' className='rows' />

                                </Form.Row>



                            </Form>
                        </Col>

                    </Row>

                </Container>
                <Footer />

            </>

        )
    }
}

export default DashboardCompany;