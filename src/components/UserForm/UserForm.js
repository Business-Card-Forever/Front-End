import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Button } from "react-bootstrap";
import './UserForm.css';
class UserForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
    return(
            < div style={{background:'#F5F5F5'}}>


                <Container fluid style={{marginTop:'2%'}} >
                    <Row >
                        <Col>
                            <div className='Container'>
                                <Row style={{borderStyle: 'none none solid none' ,borderColor:'#F5F5F5' , borderWidth:'1px' , marginRight:'5%'}} >
                                <h1> Edit my profile</h1>
                                <Button className='b1' onClick={this.handleModal}>View Profile</Button>
                                </Row>

                                <br></br>
                                <h4> Introduction</h4>
                                <br></br>
                                <Row>
                                    <div>Let the Coursera community of other learners and instructors recognize you.</div>
                                </Row>   
                            </div>
                        </Col>
                    </Row>
                </Container>


            </div>
        ); 
    }
}


        export default UserForm;
