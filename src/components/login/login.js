
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
            <>
             <Header />
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
             <Footer />
             </>
    //         <div class="login-wrap">
	// <div class="login-html">
	// 	{/* <input id="tab-1" type="radio" name="tab" class="sign-in" checked></input><label for="tab-1" class="tab">Sign In</label>
	// 	<input id="tab-2" type="radio" name="tab" class="sign-up"></input><label for="tab-2" class="tab">Sign Up</label> */}
	// 	<div class="login-form">
	// 		<div class="sign-in-htm">
	// 			<div class="group">
	// 				<label for="user" class="label">Username</label>
	// 				<input id="user" type="text" class="input"  value={this.state.credentials.username} 
    //                 onChange={this.inputChanged}/>
	// 			</div>
	// 			<div class="group">
	// 				<label for="pass" class="label">Password</label>
	// 				<input id="pass" type="password" class="input" data-type="password" value={this.state.credentials.username} 
    //                 onChange={this.inputChanged}/>
	// 			</div>
	// 			<div class="group">
	// 				<button type="submit" class="button" value="Sign In" onClick={this.login}>Log In</button>
	// 			</div>
	// 			<div class="hr"></div>
	// 		</div>
	// 		</div>
	// 	</div>
    // </div>
   
        );
    }
}

export default Login;








