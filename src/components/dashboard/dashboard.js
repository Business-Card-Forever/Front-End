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


class GetData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : null,
            user_info:'',
            update:false,
        }
    }
    componentDidMount() {
        this.renderMyData(false);
        console.log('componentWillMount')
        console.log(this.state.update)
    }
    renderMyData(stop){
        if(!stop){
            console.log('here')

        fetch(`https://e-bcard.herokuapp.com/api/userinfo/`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ data : responseJson })

                // responseJson.forEach(user =>{
                //     if(user.userinfo ==user_id){
                //         console.log('access')
                //         userr_i = user
                //         this.setState({ data : user,user_info:user.userinfo })
                        
                //     }  
                // })
            })
            .catch((error) => {
                console.error(error);
            });
            
        }else{
            console.log('No')
        }
        this.setState({update:true})
    }

    shouldComponentUpdate() {
        return true;
    }
    componentDidUpdate() {
        console.log('aghyad')
    }

    
render(){

    return(
        <>
        {this.state.data ? <Dashboard data={this.state.data} /> : <h1>Loading ....</h1> }
        </>
    );
}
}


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalBtn: false,
            data:'',
        }
    }

    handleModal = () => {
        this.setState({ modalBtn: true });
    }

    handleModalClose = () => {
        this.setState({ modalBtn: false });
    }

    render() {
        let all_data = this.props.data;
        let user_id = localStorage.getItem('user_id');
        let user_data ={}
        all_data.forEach(user =>{
                if(user.userinfo ==user_id){
                    user_data = user
                    localStorage.setItem('userinfo', user.id);

                }  
            })
            console.log(user_data)

        return (
            <>

                <Header />
                <Container>
                    <Row>
                        <Col xs={4}>
                            <div className="container1" >
                                <img className="profilePic" src={placeholder} alt='image' style={{marginLeft:170,marginTop:50}} width='150' />
                                        <Button className='b1'> Change Picture </Button>

                                        <Link to="/userform">
                                        <Button className='b1' variant="primary" onClick={this.handleModal}>Portfolio</Button>
                                        </Link>

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

                                    <Form.Control placeholder={user_data.full_name} name='full_name' className='rows' required />

                                </Form.Row>

                                <Form.Row>
                                    <label className='l' > Birthday </label>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Control placeholder={user_data.birthday}  name='birthday' type='text' className='rows'  required/>
                                </Form.Row>
                                <Form.Row>
                                    <label className='l'> City </label>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Control placeholder={user_data.city} name='city' className='rows' required />

                                </Form.Row>
                            </Form>
                        
                        </Col>
                        <Col xs={4}>
                        <Form style={{marginTop: 80, marginLeft:90  }} >
                                <Form.Row>
                                    <label className='l'> Email </label>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Control placeholder={user_data.email} name='email' className='rows'  required/>
                                </Form.Row>
                                <Form.Row>
                                    <label className='l' > About Me  </label>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Control  type='textarea' placeholder={user_data.aboutme} name='aboutme' className='rows' required />
                                </Form.Row>
                                <Form.Row>
                                    <label className='l'> Major </label>
                                </Form.Row>
                                <Form.Row>

                                    <Form.Control placeholder={user_data.major} name='major' className='rows'  required />

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




export default GetData;