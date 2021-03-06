import React , { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Button,Form,Image } from "react-bootstrap";
import './UserForm.css';
import img from './User-Profile-PNG-High-Quality-Image.png';
import "react-datepicker/dist/react-datepicker.css";
import Footer from "../footer/footer";
import Header from "../header/header";
// import Portfolio2 from './components/Portfolio2';
import { Link } from 'react-router-dom';


////////////////////////////////////////////////////////




////////////////////////////////////////////////////////


function FormU(props){
    let all_data = props.work_data;
    let user_id = localStorage.getItem('user_id');
    let user_data ={}
    all_data.forEach(user =>{
            if(user.user ==user_id){
                user_data = user
                localStorage.setItem('work_data', user.id);

            }  
        })
        console.log(user_data)



    let education_data = props.edu_data;
    let edu_data ={}
    education_data.forEach(user =>{
            if(user.user ==user_id){
                edu_data = user
                localStorage.setItem('edu_data', user.id);

            }  
        })
        console.log(edu_data)
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
                            
                            <Button className='b1' variant="primary" > <Link to='/Portfolio2'>View Your Portfolio</Link>   </Button>
                            {/* onClick={this.handleModal} */} 
                            
                            </Row>

                            <br></br>
                            <h4> Introduction</h4>
                            <br></br>
                            <Row>
                                <div>Let Us Know More Info About you.</div>
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
                                                        <Form.Control type="text" name='full_name' placeholder="Full Name" onChange={inputChanged} defaultValue={props.data.full_name} />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" name='email' onChange={inputChanged} defaultValue={props.data.email} />
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridCity">
                                                <Form.Label>City</Form.Label>
                                                <Form.Control placeholder="Ex. Amman" name='city' onChange={inputChanged} defaultValue={props.data.city} />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridMajor">
                                                <Form.Label>Major</Form.Label>
                                                <Form.Control placeholder="Ex. Computer Scenice" name='major' onChange={inputChanged} defaultValue={props.data.major} />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridBirthday">
                                                <Form.Label>Birthday</Form.Label>
                                                    <Form.Control type="text" placeholder="2//5/2021" name='birthday' onChange={inputChanged} defaultValue={props.data.birthday} />
                                            </Form.Group>
                                        </Form.Row>
                                            
                                            <Form.Group controlId="aboutME.ControlTextarea">
                                                <Form.Label>About Me</Form.Label>
                                                <Form.Control as="textarea" rows={3} name='aboutme' onChange={inputChanged} defaultValue={props.data.aboutme} />
                                            </Form.Group>

                                        
                                        <Form.Row>
                                            
                                        </Form.Row>

                                            <Button variant="primary" onClick={createNewProfile} type="submit">
                                                Save
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
                                                <Form.Control type="text" name='org_name' onChange={WorkChanged} placeholder="Orgniaiztion Name" defaultValue={user_data.org_name} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPosition">
                                        <Form.Label>Position</Form.Label>
                                        <Form.Control type="text" name='position' onChange={WorkChanged} placeholder="Position" defaultValue={user_data.position} />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridDate">
                                        <Form.Label>Date</Form.Label>
                                        <Form.Control placeholder="Ex. 2/5/2021" name='date' onChange={WorkChanged} defaultValue={user_data.date} />
                                    </Form.Group>
                                </Form.Row>                                    
                                    <Form.Group controlId="aboutME.ControlDescription">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" rows={3} name='desc' onChange={WorkChanged} defaultValue={user_data.desc} />
                                    </Form.Group>
                                <Form.Row>
                                    
                                </Form.Row>

                                    <Button variant="primary" onClick={WorkNewProfile} type="submit">
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
                                            <Form.Label>Institute Name</Form.Label>edu_data
                                                <Form.Control type="text" name='institute_name' onChange={EduChanged} placeholder="Ex . PHILADELPHIA UNIVERSITY" defaultValue={edu_data.institute_name} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridDegree">
                                        <Form.Label>Degree</Form.Label>
                                        <Form.Control type="text" name='degree' onChange={EduChanged} placeholder="Ex. BSC in Computer Science" defaultValue={edu_data.degree} />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridDate">
                                        <Form.Label>Date</Form.Label>
                                        <Form.Control placeholder="Ex. 2/5/2021" name='date' onChange={EduChanged}  defaultValue={edu_data.date}  />
                                    </Form.Group>
                                </Form.Row>                                    
                                    <Form.Group controlId="aboutME.ControlDescription">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" rows={3} name='desc' onChange={EduChanged}  defaultValue={edu_data.desc}  />
                                    </Form.Group>
                                <Form.Row>
                                    
                                </Form.Row>

                                    <Button variant="primary" onClick={EduNewProfile} type="submit">
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
            data : null,
            work_data:[],
            edu_data:[],
        }
    }
    componentDidMount() {
        this.renderMyData(false);
        console.log('From user componentDidMount')
        console.log(this.state.update)
    }
    renderMyData(stop){
        console.log('From user renderMyData')

        /////////////////////// User Info/////////////////////////////
        let user_id = localStorage.getItem('userinfo');
        fetch(`https://e-bcard.herokuapp.com/api/userinfo/${user_id}`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ data : responseJson })
            })
            .catch((error) => {
                console.error(error);
            });

        ////////////////////// Work Experience/////////////////////////////
        fetch(`http://e-bcard.herokuapp.com/api/workexperience/`)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({ work_data : responseJson })
            })
            .catch((error) => {
                console.error(error);
            });

        ////////////////////// Education Experience/////////////////////////////
        fetch(`http://e-bcard.herokuapp.com/api/eduction/`)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({ edu_data : responseJson })
        })
        .catch((error) => {
            console.error(error);
        });


    }

    shouldComponentUpdate() {
        return true;
    }
    componentDidUpdate() {
        console.log('From user componentDidUpdate')
    }

    render() {
        console.log(this.state.work_data)
    return(
        <>
        {this.state.data ? <FormU data={this.state.data} work_data={this.state.work_data} edu_data={this.state.edu_data} /> : <h1>Loading ....</h1> }
        </>
        ); 
    }
}

const cred = {}
const credwork={}
const crededu={}

const createNewProfile = (event) => {
    event.preventDefault();
    console.log(cred)
    
    
    let us_inf=localStorage.getItem('userinfo');
    cred['userinfo'] = parseInt(localStorage.getItem('user_id'));
    cred['id'] = parseInt(localStorage.getItem('userinfo'));
    let url = `http://e-bcard.herokuapp.com/api/userinfo/${us_inf}/`;
    console.log(url,cred)
    return fetch(url, {
        method: 'PUT',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(cred)
    }).then(response => response.json()).then((json) => {
        alert('done 1')
    })
    .catch(error => error);
}


const inputChanged = event =>{
    cred[event.target.name] = event.target.value;
    console.log(cred)
    
}


///////////////////////////// Work Ex///////////////////////////////////////

const WorkNewProfile = (event) => {
    event.preventDefault();
    console.log(credwork)
    
    
    let work_data=localStorage.getItem('work_data');
    credwork['user'] = parseInt(localStorage.getItem('user_id'));
    credwork['id'] = parseInt(localStorage.getItem('work_data'));
    let url = `http://e-bcard.herokuapp.com/api/workexperience/${work_data}/`;
    console.log(url,credwork)
    return fetch(url, {
        method: 'PUT',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(credwork)
    }).then(response => response.json()).then((json) => {
        alert('done 2')
    })
    .catch(error => error);
}


const WorkChanged = event =>{
    credwork[event.target.name] = event.target.value;
    console.log(credwork)
    
}


///////////////////////////// EDU ///////////////////////////////////////

const EduNewProfile = (event) => {
    event.preventDefault();
    console.log(crededu)
    
    
    let edu_data=localStorage.getItem('edu_data');
    crededu['user'] = parseInt(localStorage.getItem('user_id'));
    crededu['id'] = parseInt(localStorage.getItem('edu_data'));
    let url = `http://e-bcard.herokuapp.com/api/eduction/${edu_data}/`;
    console.log(url,crededu)
    return fetch(url, {
        method: 'PUT',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(crededu)
    }).then(response => response.json()).then((json) => {
        alert('done 2')
    })
    .catch(error => error);
}


const EduChanged = event =>{
    crededu[event.target.name] = event.target.value;
    console.log(crededu)
    
}



export default UserForm;
