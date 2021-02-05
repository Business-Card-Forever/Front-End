// import React, { Component } from "react";
// import './login.css';
// import { Button, Form } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// class Login extends Component {
//     state = {
//         credentials: {username:'', password:''}
//     }
//     login = event =>{

//         let user_object = this.state.credentials

//         fetch('http://127.0.0.1:8000/auth/',{
//             method:'POST',
//             headers:{'Content-Type': 'application/json'},
//             body:JSON.stringify(user_object)
//         })
//         .then(data =>data.json())
//         .then(
//             data => {
//                 alert(data.token)
//                 this.props.userLogin(data.token)
//             }
//         ).catch(error => console.log(error))

//     }
//     register = event =>{
//         console.log(this.state.credentials.username)
//         console.log(this.state.credentials.password)
//         fetch('http://127.0.0.1:8000/api/users/',{
//             method:'POST',
//             headers:{'Content-Type':'application/json'},
//             body:JSON.stringify(this.state.credentials)
//         })
//         .then(data =>data.json())
//         .then(
//             data => {
//                 console.log(data.token);
//             }
//         ).catch(error => console.error("here",error))
//     }
//     inputChanged = event =>{
//         const cred = this.state.credentials;
//         cred[event.target.name] = event.target.value;
//         this.setState({credentials : cred});
//     }

//     render() {
//         return (
//             <div id="container">
//                 <Form>
//             <Form.Group controlId="formBasicEmail">
//                 <Form.Label> Username: </Form.Label>
//                 <Form.Control type="text" name="username" placeholder="Enter Your Username" onChange={this.inputChanged} />

//             </Form.Group>

//             <Form.Group controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control type="password" name="password" placeholder="Enter Your Password" onChange={this.inputChanged} />
//                 <Form.Text className="text-muted">
//                 Recommended 8 characters.
//                 </Form.Text>
//             </Form.Group>

//             <Button variant="primary" type="submit" onClick={this.login}> Login</Button>
//             {/* <Button variant="success" type="submit" onClick={this.login}> Login </Button> */}
//             </Form>



// {/*                 
//             <div>
//             <nav />
//             </div>
//                 <h1 > Login </h1>
//                 <lable>
//                     Username: 
//                     <br/><input type="text" name="username"
//                     value={this.state.credentials.username} 
//                     onChange={this.inputChanged}/>
//                 </lable>
//                 <br/>
//                 <lable>
//                     Email : 
//                     <input type="password" name="password"
//                     value={this.state.credentials.password} 
//                     onChange={this.inputChanged}/>
//                 </lable><br/>

//                 <button onClick={this.login}>Login</button>
//                 <button onClick={this.register}>Register</button> */}
//             </div>
//         );
//     }
// }

// export default Login;




import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Footer from '../footer/footer';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';



class Login extends Component {
    state = {
        credentials: { username: '', password: '' },
        redirect: null
    }

    login = event => {

        fetch('http://127.0.0.1:8000/auth/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.credentials)
        })
            .then(data => data.json())
            .then(
                data => {
                    console.log(data.token);
                    this.props.userLogin(data.token)
                    if (data.token !== undefined) {
                        localStorage.setItem('access_token', data.token);
                        // localStorage.getItem('access_token');
                        this.setState({ redirect: "/dashboard" });
                        localStorage.setItem('user_id', 'https://web.facebook.com/aghyadalbalkhi/');

                    }


                }
            ).catch(error => console.log("here", error))

    }



    register = event => {
        console.log(this.state.credentials.username)
        console.log(this.state.credentials.password)
        fetch('http://127.0.0.1:8000/api/users/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.credentials)
        })
            .then(data => data.json())
            .then(
                data => {
                    alert('User Created')
                    console.log(data.token);

                }
            ).catch(error => console.error("here", error))



    }
    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({ credentials: cred });
    }


    render() {
        if (this.state.redirect) {
            console.log(this.state.redirect)
            return <Redirect to={this.state.redirect} />
        }
        return (




<div className="login-container">
    <MDBContainer>
      <MDBRow>
        <MDBCol md='6'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                'url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)',
              width: '28rem'
            }}
          >
            <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
              <div className='text-center'>
                <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                  <strong>SIGN</strong>
                  <a href='#!' className='green-text font-weight-bold'>
                    <strong> UP</strong>
                  </a>
                </h3>
              </div>
              <MDBInput
                label='Your email'
                group
                type='text'
                validate
                labelClass='white-text'
              />
              <MDBInput
                label='Your password'
                group
                type='password'
                validate
                labelClass='white-text'
              />
           
              <MDBRow className='d-flex align-items-center mb-4'>
                <div className='text-center mb-3 col-md-12'>
                  <MDBBtn
                    color='success'
                    rounded
                    type='button'
                    className='btn-block z-depth-1'
                  >
                    Sign in
                  </MDBBtn>
                </div>
              </MDBRow>
              <MDBCol md='12'>
                <p className='font-small white-text d-flex justify-content-end'>
                </p>
              </MDBCol>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    </div>
        );
    }
}

export default Login;