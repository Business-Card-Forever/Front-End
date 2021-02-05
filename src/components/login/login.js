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




// import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
// import Footer from '../footer/footer';
// import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';



// class Login extends Component {
//     state = {
//         credentials: { username: '', password: '' },
//         redirect: null
//     }

//     login = event => {

//         fetch('http://127.0.0.1:8000/auth/', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(this.state.credentials)
//         })
//             .then(data => data.json())
//             .then(
//                 data => {
//                     console.log(data.token);
//                     this.props.userLogin(data.token)
//                     if (data.token !== undefined) {
//                         localStorage.setItem('access_token', data.token);
//                         // localStorage.getItem('access_token');
//                         this.setState({ redirect: "/dashboard" });
//                         localStorage.setItem('user_id', 'https://web.facebook.com/aghyadalbalkhi/');

//                     }


//                 }
//             ).catch(error => console.log("here", error))

//     }



//     register = event => {
//         console.log(this.state.credentials.username)
//         console.log(this.state.credentials.password)
//         fetch('http://127.0.0.1:8000/api/users/', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(this.state.credentials)
//         })
//             .then(data => data.json())
//             .then(
//                 data => {
//                     alert('User Created')
//                     console.log(data.token);

//                 }
//             ).catch(error => console.error("here", error))



//     }
//     inputChanged = event => {
//         const cred = this.state.credentials;
//         cred[event.target.name] = event.target.value;
//         this.setState({ credentials: cred });
//         console.log(cred);
//     }


//     render() {
//         if (this.state.redirect) {
//             console.log(this.state.redirect)
//             return <Redirect to={this.state.redirect} />
//         }
//         return (




// <Form>
//   <Form.Group controlId="formBasicEmail">
//     <Form.Label>Email address</Form.Label>
//     <Form.Control type="email" placeholder="Enter email" />
//     <Form.Text className="text-muted">
//       We'll never share your email with anyone else.
//     </Form.Text>
//   </Form.Group>
//   <Form.Group controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//     <Form.Control type="password" placeholder="Password" />
//   </Form.Group>
//   <Form.Group controlId="formBasicCheckbox">
//     <Form.Check type="checkbox" label="Check me out" />
//   </Form.Group>
//   <Button variant="primary" type="submit">
//     Submit
//   </Button>
// </Form>
//         );
//     }
// }

// export default Login;

// import React, { Component } from "react";

// class Login extends Component {
//     state = {
//         credentials: {username:'', password:''}
//     }

//     login = event =>{

//         fetch('http://127.0.0.1:8000/auth/',{
//             method:'POST',
//             headers:{'Content-Type':'application/json'},
//             body:JSON.stringify(this.state.credentials)
//         })
//         .then(data =>data.json())
//         .then(
//             data => {
//                 this.props.userLogin(data.token)

//             }
//         ).catch(error => console.error("here",error))

//     }

//     inputChanged = event =>{
//         const cred = this.state.credentials;
//         cred[event.target.name] = event.target.value;
//         this.setState({credentials : cred});
//         console.log(cred);
//     }


//     render() {
//         return (
//             <form>
//                 <h3>Log In</h3>
//             <div>
//                 <lable>
//                     Email Address
//                     <input type="text" name="username" placeholder="Enter your email"
//                     value={this.state.credentials.username} 
//                     onChange={this.inputChanged}/>
//                 </lable>
//                 <br/>
//                 <lable>
//                     Password 
//                     <input type="password" name="password" placeholder="Passowrd"
//                     value={this.state.credentials.password} 
//                     onChange={this.inputChanged}/>
//                 </lable>
//                 <br/>
//                 <button onClick={this.login}>Login</button>
//                 {/* <button onClick={this.register}>Register</button> */}
//             </div>
//             </form>
//         );
//     }
// }

// export default Login;











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


class Login extends Component {
    state = {
        credentials: {username:'', password:''},
        redirect: null
    }

    login = event =>{

        fetch('https://e-bcard.herokuapp.com/auth/',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(this.state.credentials)
        })
        .then(data =>data.json())
        .then(
            data => {
                console.log(data.token);
                // this.props.userLogin(data.token)
                if(data.token !==undefined){
                    localStorage.setItem('access_token', data.token);
                    // localStorage.getItem('access_token');
                    this.setState({ redirect: "/dashboard" });
                    localStorage.setItem('user_id', 'https://web.facebook.com/aghyadalbalkhi/');
                    
                }


            }
        ).catch(error => console.log("here",error))
    
    }



    register = event =>{
        console.log(this.state.credentials.username)
        console.log(this.state.credentials.password)
        fetch('https://e-bcard.herokuapp.com/api/users/',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(this.state.credentials)
        })
        .then(data =>data.json())
        .then(
            data => {
                alert('User Created')
                console.log(data.token);

            }
        ).catch(error => console.error("here",error))



    }
    inputChanged = event =>{
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials : cred});
    }


    render() {
        if (this.state.redirect) {
            console.log(this.state.redirect)
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                <h1> login user form</h1>
                <lable>
                    Username:
                    <input type="text" name="username"
                    value={this.state.credentials.username} 
                    onChange={this.inputChanged}/>
                </lable>
                <br/>
                <lable>
                    Password : 
                    <input type="password" name="password"
                    value={this.state.credentials.password} 
                    onChange={this.inputChanged}/>
                </lable>
                <br/>
                <button onClick={this.login}>Login</button>
                <button onClick={this.register}>Register</button>
            </div>
        );
    }
}

export default Login;