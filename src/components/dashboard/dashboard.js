import React from "react";
import './dashboard.css';
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
            <div className='dash-container'>
                <Navbar bg="dark" variant="dark">
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

                    {/* <Nav className="mr-auto"> */}
                    <div className="home">
                        <h1>E-BCard</h1>
                    </div>
                    {/* </Nav> */}
                </Navbar>



                <div className="container4">
                    <Button className='b1' onClick={this.handleModal}> View Portfolio </Button>
                    <Button className='b1'> My Collection </Button>
                    <Button className='b1'> Events </Button>
                    <Button className='b1'> My QR Code </Button>

                </div>

                <div className="container1">
                    <figure>
                        <img className="profilePic" src="http://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png" />
                        <figcaption>
                            <Button> Change Picture </Button>
                        </figcaption>
                    </figure>
                </div>


                <div className="info">
                    <div className="container2">
                        <label> Full Name: </label> <br />
                        <input className="fullName" value='Omar Zain' /><br />
                        <label> Birthday: </label> <br />
                        <input className="birthdate" value='20 Jan 1995.com' /><br />
                        <label> City: </label> <br />
                        <input className="city" value='Amman' /><br />
                    </div>

                    <div className="container3">
                        <label> Email: </label> <br />
                        <input className="email" value='123@gmail.com' /><br />
                        <label> Phone: </label> <br />
                        <input className="phone" value='+962-788703716' /><br />
                        <label> major: </label> <br />
                        <input className="major" value='Software Development' /><br />
                    </div>
                </div>




                {/* <video src='../../img/bgx.mp4' width="600" height="300" controls="controls" autoplay="true" /> */}


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


            </div>
        )
    }
}

export default Dashboard;