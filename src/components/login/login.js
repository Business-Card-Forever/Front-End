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
                }
            }
        ).catch(error => console.log("here",error));

        ///////////// Get User ID///////////////////////////////
        fetch('https://e-bcard.herokuapp.com/api/users/',{
            method:'GET',
            headers:{'Content-Type':'application/json'},
        })
        .then(data =>data.json())
        .then(
            data => {
                // console.log(data);

                data.map(user => {
                    if (user.username ==this.state.credentials.username){
                        localStorage.setItem('user_id', user.id);
                        return user.id
                    }
                })
                return data
            }
        ).catch(error => console.log("here",error));
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



