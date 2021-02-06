import { Button, Form, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './signup.css';
import Footer from "../footer/footer";
import Header from "../header/header";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Register_personal extends Component {
    state = {
        credentials: {
            username:'',
            password:'',
            full_name:'',
            email:'',
            city:'',
            major:'',
            aboutme:'',
            birthday:'',
    
    
            },
        redirect: null
    }


    register = event =>{
        let new_user_id ='';
        let object_sender ={
            username:this.state.credentials.username,
            password:this.state.credentials.password
        }
        console.log(object_sender)
        fetch('https://e-bcard.herokuapp.com/api/users/',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(object_sender)
        })
        .then(data =>data.json())
        .then(
            data => {
                alert('User Created')
                this.CreateUserInfoObject(data.id)
                new_user_id = data.id
                this.setState({ redirect: "/login" }); 
                
            }
        ).catch(error => console.error("here",error))

    }
        /////////////////////////// Create User Info Object///////////////////////////////////////////

    CreateUserInfoObject(id){
        let object_sender ={
            full_name:this.state.credentials.full_name,
            userinfo:id,
            birthday:this.state.credentials.birthday,
            city:this.state.credentials.city,
            email:this.state.credentials.email,
            aboutme:this.state.credentials.aboutme,
            major:this.state.credentials.major,
        }

        fetch('http://e-bcard.herokuapp.com/api/userinfo/',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(object_sender)
        })
        .then(data =>data.json())
        .then(
            data => {
                console.log('User Object Created' , data.id) 
            }
        ).catch(error => console.error("here",error))

        this.CreateUserWorkObject(id)
    }

    CreateUserWorkObject(id){
        let object_sender ={
            org_name:'Orgniaiztion Name',
            position:'Position',
            date:'2021-06-02',
            email:'email@gmail.com',
            desc:'Desc About Your Work Experience.',
            user:id,
        }

        fetch('http://e-bcard.herokuapp.com/api/workexperience/',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(object_sender)
        })
        .then(data =>data.json())
        .then(
            data => {
                console.log('User Object Created' , data.id) 
            }
        ).catch(error => console.error("here",error))
        this.CreateUserEducObject(id)
    }

    CreateUserEducObject(id){
        let object_sender ={
            institute_name:'Institute Name',
            degree:'Degree',
            date:'2021-06-02',
            desc:'Desc About Your Education.',
            user:id,
        }

        fetch('http://e-bcard.herokuapp.com/api/eduction/',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(object_sender)
        })
        .then(data =>data.json())
        .then(
            data => {
                console.log('User Object Created' , data.id) 
            }
        ).catch(error => console.error("here",error))
    }




    inputChanged = event =>{
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials : cred});
        console.log(cred)

    }


    render() {
        if (this.state.redirect) {
            console.log(this.state.redirect)
            return <Redirect to={this.state.redirect} />
        }


    return (
        <>
        <Header />
        <section>
        <div className="body-login1">
            <div className="main-signup-personally">
                <img className="signup" alt='img' align="center" src="https://play-lh.googleusercontent.com/nJcgTrETflv8liaA-3zrv7po7NyfKDMpMswbazxx6oWGnNAzT4D1mPniyX0nOrE-YnaV"/>
                <form className="form-signup">
                    <label align="center">Full Name</label>
                    <input type="text" name="full_name" className="un-signup" align="center" placeholder="enter your full name" onChange={this.inputChanged} / >
                    <label align="center">Email Adress</label>
                    <input type="text" name="email" className="un-signup" align="center" placeholder="enter your email adress" onChange={this.inputChanged}/>
                    <label align="center">User Name</label>
                    <input type="text" name="username" className="un-signup" align="center" placeholder="enter your email adress" onChange={this.inputChanged}/>
                    
                    
                    <label align="center">User Password</label>
                    <input type="password" name="password" className="pass1" align="center" placeholder="capital letters recommended" onChange={this.inputChanged}/>
                    <label align="center">User Adress</label>
                    <input type="text" name="city" className="un-signup" align="center" placeholder="enter your city " onChange={this.inputChanged}/>
                    <label align="center">User Birthday</label>
                    <input type="date" name="birthday" className="un-signup" align="center" placeholder="enter your birthday" onChange={this.inputChanged}/>
                    <label align="center">User Major</label>
                    <input type="text" name="major" className="un-signup" align="center" placeholder="enter your major" onChange={this.inputChanged}/>
                    <label align="center" for="w3review">A brief about you</label>
                    <textarea className="abrief" name="aboutme" rows="4" cols="50" onChange={this.inputChanged}></textarea>
    
                <div className="div-register1"><a  className="submit2" align="center" onClick={this.register}>Sign Up</a></div>
                </form>
            </div>
        </div>
            </section>
        <Footer />
        </>
    );
    }
}

export default Register_personal;