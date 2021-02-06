import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './login.css';
import Footer from "../footer/footer";
import Header from "../header/header";


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
            <>
            <Header />
            <div className="body-login">
            <div className="main">
                <img className="sign" align="center" src="https://play-lh.googleusercontent.com/nJcgTrETflv8liaA-3zrv7po7NyfKDMpMswbazxx6oWGnNAzT4D1mPniyX0nOrE-YnaV"/>
                <form className="form1">
                
                    <input type="text" name="username" className="un" align="center" placeholder="Username"
                    value={this.state.credentials.username} 
                    onChange={this.inputChanged}/>
                    <input type="password" name="password" className="pass" align="center" placeholder="Password"
                    value={this.state.credentials.password} 
                    onChange={this.inputChanged}/>

                <div className="div-login"><a onClick={this.login} className="submit" align="center">Login</a></div>
                <div className="div-register"><a onClick={this.register} className="submit2" align="center">Register</a></div>
                </form>
            </div>
            </div>
            <Footer />
            </>
        );
    }
}

export default Login;
