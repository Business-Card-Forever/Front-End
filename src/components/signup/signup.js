import React from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './signup.css';
import Footer from "../footer/footer";
import Header from "../header/header";

function signIn(props) {

    return (
        <>
        <Header />
        <section className="signup-section">
        <div className="body-login1">
            <div className="main-signup-personally">
                <img className="signup" alt='img' align="center" src="https://play-lh.googleusercontent.com/nJcgTrETflv8liaA-3zrv7po7NyfKDMpMswbazxx6oWGnNAzT4D1mPniyX0nOrE-YnaV"/>
                <h2 className="logo-test" align="center">QR Registration</h2>
                <form className="form-signup">
                    <label align="center">Full Name</label>
                    <input type="text" name="username" className="un-signup" align="center" placeholder="enter your full name" required />
                    <label align="center">Email Adress</label>
                    <input type="text" name="username" className="un-signup" align="center" placeholder="enter your email adress" required />
                    <label align="center">User Password</label>
                    <input type="password" name="password" className="pass1" align="center" placeholder="capital letters recommended" required />
                    <label align="center">User Adress</label>
                    <input type="text" name="username" className="un-signup" align="center" placeholder="enter your city " required />
                    <label align="center">User Birthday</label>
                    <input type="date" name="username" className="un-signup" align="center" placeholder="enter your birthday" required />
                    <label align="center">User Major</label>
                    <input type="text" name="username" className="un-signup" align="center" placeholder="enter your major" required />
                    <label align="center" for="w3review">A brief about you</label>
                    <textarea className="abrief" name="w3review" rows="4" cols="50" required ></textarea>
    
                <div className="div-register1"><a  className="submit2" align="center">Sign Up</a></div>
                </form>
            </div>
            </div>
            </section>
        <Footer />
        </>
    );

}

export default signIn;