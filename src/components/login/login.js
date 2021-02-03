import React, { Component } from "react";
// import './login.css';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {
    state = {
        credentials: {username:'', password:''}
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
                this.props.userLogin(data.token)
            }
        ).catch(error => console.error("here",error))
    }
    register = event =>{
        fetch('https://e-bcard.herokuapp.com/api/users/',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(this.state.credentials)
        })
        .then(data =>data.json())
        .then(
            data => {
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
        return (
            <div id="container">
                <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label> Username: </Form.Label>
                <Form.Control type="text" placeholder="username..." onChange={this.inputChanged} />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password..." onChange={this.inputChanged} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={this.register}> Sign Up </Button>
            <Button variant="primary" type="submit" onClick={this.login}> Login </Button>
            </Form>


            
{/*                 
            <div>
            <nav />
            </div>
                <h1 > Login </h1>
                <lable>
                    Username: 
                    <br/><input type="text" name="username"
                    value={this.state.credentials.username} 
                    onChange={this.inputChanged}/>
                </lable>
                <br/>
                <lable>
                    Email : 
                    <input type="password" name="password"
                    value={this.state.credentials.password} 
                    onChange={this.inputChanged}/>
                </lable><br/>

                <button onClick={this.login}>Login</button>
                <button onClick={this.register}>Register</button> */}
            </div>
        );
    }
}

export default Login;