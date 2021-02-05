import React , { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Button,Form,Image } from "react-bootstrap";
import './UserForm.css';
import img from './User-Profile-PNG-High-Quality-Image.png';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "../footer/footer";
import Header from "../header/header";
// import Portfolio2 from './components/Portfolio2';
// import { Link } from 'react-router-dom';
// const Date = () => {
//     const [startDate, setStartDate] = useState(new Date());
//     return (
//         <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
//     );
// };


function FormU(){

    return(
        <>
            <Header />

        < div style={{background:'#F5F5F5'}}>


            <Container fluid style={{marginTop:'2%'}} >
                <Row >
                    <Col>
                        <div className='Container'>
                            <Row style={{borderStyle: 'none none solid none' ,borderColor:'#F5F5F5' , borderWidth:'1px' , marginRight:'5%'}} >
                            <h1> Edit my profile</h1>
                            <Button className='b1' variant="primary" >View Your Portfolio</Button>
                            {/* onClick={this.handleModal} */} 
                            {/* <Link to="/Portfolio2"></Link> */}
                            </Row>

                            <br></br>
                            <h4> Introduction</h4>
                            <br></br>
                            <Row>
                                <div>Let the Coursera community of other learners and instructors recognize you.</div>
                            </Row><br></br>   

{/* *************************************General Experience *********************************************/}
                            <Row style={{borderStyle: 'none none solid none' ,borderColor:'#F5F5F5' , borderWidth:'1px' , marginRight:'5%'}} >

                                <Form style={{width:'80%'}}>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Image src={img} width="100" height="100" rounded responsive  />
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                                <Form.File id="exampleFormControlFile1" label=" File Input" />
                                        </Form.Group>
                                    </Form.Row><br></br>


                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridFull_Name">
                                                    <Form.Label>Full Name</Form.Label>
                                                        <Form.Control type="text" placeholder="Full Name" />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridCity">
                                                <Form.Label>City</Form.Label>
                                                <Form.Control placeholder="Ex. Amman" />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridMajor">
                                                <Form.Label>Major</Form.Label>
                                                <Form.Control placeholder="Ex. Computer Scenice" />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridBirthday">
                                                <Form.Label>Birthday</Form.Label>
                                                    <Form.Control type="text" placeholder="2//5/2021" />
                                            </Form.Group>
                                        </Form.Row>
                                            
                                            <Form.Group controlId="aboutME.ControlTextarea">
                                                <Form.Label>About Me</Form.Label>
                                                <Form.Control as="textarea" rows={3} />
                                            </Form.Group>

                                        
                                        <Form.Row>
                                            
                                        </Form.Row>

                                            <Button variant="primary" type="submit">
                                                Submit
                                            </Button><br></br><br></br><br></br>
                                </Form>
                                
                            </Row>
{/* *************************************Work Experience *********************************************/}
                            <br></br>
                                <h4> Work Experience</h4>
                            <br></br>
                            <Row>
                                <div>Tell us about your Work experience.</div>
                            </Row><br></br>

                            <Row style={{borderStyle: 'none none solid none' ,borderColor:'#F5F5F5' , borderWidth:'1px' , marginRight:'5%'}} >

                            <Form style={{width:'80%'}}>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridOrg_Name">
                                            <Form.Label>Orgniaiztion Name</Form.Label>
                                                <Form.Control type="text" placeholder="Orgniaiztion Name" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPosition">
                                        <Form.Label>Position</Form.Label>
                                        <Form.Control type="text" placeholder="Position" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridDate">
                                        <Form.Label>Date</Form.Label>
                                        <Form.Control placeholder="Ex. 2/5/2021" />
                                    </Form.Group>
                                </Form.Row>                                    
                                    <Form.Group controlId="aboutME.ControlDescription">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                <Form.Row>
                                    
                                </Form.Row>

                                    <Button variant="primary" type="submit">
                                        Save
                                    </Button><br></br><br></br><br></br>
                                </Form>
                            </Row>

{/* *************************************Education Experience *********************************************/}
                            <br></br>
                                <h4> Education Experience</h4>
                            <br></br>
                            <Row>
                                <div>Tell us about your Education experience.</div>
                            </Row><br></br>

                            <Row style={{borderStyle: 'none none solid none' ,borderColor:'#F5F5F5' , borderWidth:'1px' , marginRight:'5%'}} >

                            <Form style={{width:'80%'}}>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridinstitute_name">
                                            <Form.Label>Institute Name</Form.Label>
                                                <Form.Control type="text" placeholder="Ex . PHILADELPHIA UNIVERSITY" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridDegree">
                                        <Form.Label>Degree</Form.Label>
                                        <Form.Control type="text" placeholder="Ex. BSC in Computer Science" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridDate">
                                        <Form.Label>Date</Form.Label>
                                        <Form.Control placeholder="Ex. 2/5/2021" />
                                    </Form.Group>
                                </Form.Row>                                    
                                    <Form.Group controlId="aboutME.ControlDescription">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                <Form.Row>
                                    
                                </Form.Row>

                                    <Button variant="primary" type="submit">
                                        Save
                                    </Button><br></br><br></br><br></br>
                                </Form>                        


                            </Row>


                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
        <Footer />
        </>
    );
}



class UserForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    

    render() {
    return(
        <FormU/>
        ); 
    }
}


export default UserForm;
