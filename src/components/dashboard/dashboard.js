import React from "react";
import './dashboard.css';
import placeholder from "../../img/image.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
// import { ButtonGroup } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faInstagram, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { Button, Form, Col, Row} from 'react-bootstrap';
import Header from '../header/header.js';

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

<Header />
<Container>
    <Row>
        <Col xs={4}>
            <div className="container1" >
                <img className="profilePic" src={placeholder} alt='image' style={{marginLeft:170,marginTop:50}} width='150' />
                        <Button className='b1'> Change Picture </Button>

                        <Button className='b1' variant="primary" onClick={this.handleModal}>Portfolio</Button>

                        <Link to="/qrcode">

                            <Button className='b1' variant="success">QR Code</Button>

                        </Link>

                        <Button className='b1' variant="info">Connection list</Button>


            </div>
        </Col>

        <Col xs={4}>
            <Form style={{ marginTop: 80, marginLeft: 90 }} >
                <Form.Row>
                    <label className='l'> Full Name</label>
                </Form.Row>
                <Form.Row>

                    <Form.Control placeholder=" hadeel hussam" name='full_name' className='rows' required />

                </Form.Row>

                <Form.Row>
                    <label className='l' > Birthday </label>
                </Form.Row>
                <Form.Row>
                    <Form.Control placeholder=" 10-1-2010"  name='birthday' type='date' className='rows'  required/>
                </Form.Row>
                <Form.Row>
                    <label className='l'> City </label>
                </Form.Row>
                <Form.Row>
                    <Form.Control placeholder="Amman" name='city' className='rows' required />

                </Form.Row>
            </Form>
          
        </Col>
        <Col xs={4}>
        <Form style={{marginTop: 80, marginLeft:90  }} >
                <Form.Row>
                    <label className='l'> Email </label>
                </Form.Row>
                <Form.Row>
                    <Form.Control placeholder="hadeelhh@gmail.com" name='email' className='rows'  required/>
                </Form.Row>
                <Form.Row>
                    <label className='l' > About Me  </label>
                </Form.Row>
                <Form.Row>
                    <Form.Control  type='textarea' placeholder="software engineering and full  stack web development " name='aboutme' className='rows' required />
                </Form.Row>
                <Form.Row>
                    <label className='l'> Major </label>
                </Form.Row>
                <Form.Row>

                    <Form.Control placeholder="Software Engineering" name='major' className='rows'  required />

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

export default Dashboard;