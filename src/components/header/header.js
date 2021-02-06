import React from 'react';
import './header.css';
import logo from '../../img/logo.png';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Login from '../login/login';
// import SignUp from '../signup/signup';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginBtn: false,
            SignUpBtn: false,
            token: '',
        }
    }

    handleLogin = () => {
        this.setState({ loginBtn: true });
    }

    handleSignup = () => {
        this.setState({ SignUpBtn: true });
    }

    handleSignUpClose = () => {
        this.setState({ SignUpBtn: false });
    }

    handleLoginClose = () => {
        this.setState({ loginBtn: false });
    }

    userLogin = (tok) => {
        this.setState({ token: tok })
        console.log(tok)
        console.log(this.state.token);

    }

    render() {
        const style = {
            color: 'white',
            width: '145px',
            textAlign: 'center',
            fontSize: '22px',
        };

        const homeStyle = {
            color: 'white',
            marginLeft: '10%',
            width: '145px',
            textAlign: 'center',
            fontSize: '22px'
        }


        return (
            <div className='header' >

                <Navbar bg="dark" variant="dark">
                    <a className="logo" href='/'><img src={logo}  alt="logo" /></a>

                    <Nav className="mr-auto">
                        <Nav.Link style={homeStyle} href="/">Home</Nav.Link>
                        <Nav.Link style={style} href="/aboutus">About Us</Nav.Link>
                        <Nav.Link style={style} href="/events">Events</Nav.Link>
                    </Nav>

                    {/* <Form className="loginBtn">
                        <Button onClick={this.handleLogin} variant="outline-info">Login1</Button>
                    </Form>
                                            <Nav.Link style={style} href="/events">Events</Nav.Link>
                    <Form className="signinBtn">
                        <Button onClick={this.handleSignup} variant="outline-info">Sign Up1</Button>
                    </Form> */}
                    {/* <Login userLogin={this.userLogin}/> */}
                    <Nav.Link style={style} href="/login">Login</Nav.Link>
                    <Nav.Link style={style} href="/signup">SignUp</Nav.Link>
                </Navbar>

            </div>
        )

    }
}

export default Header;


