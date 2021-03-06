import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Dashboard from './components/dashboard/dashboard';
import Dashboard_c from './components/dashboard_c/dashboard_c';
// import How from './components/HowitWork/how';
import Features from './components/features/features';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Qrcode from './components/Qrcode/Qrcode';
import Main from './components/main/main';
import Login from './components/login/login';
import Recent from './components/recent/recent';
import SignUp from './components/signup/signup';
import RegPage from './components/regPage/reg';
import About from './components/Aboutus/aboutus';
import Events from './components/events/renderedEvents';
import UserForm from './components/UserForm/UserForm';
import Portfolio2 from './components/Portfolio2';
import CreateEvents from './components/eventForm/eventForm';
import eeeeeee from './components/EventSection/EventSection';






const routing = (
<Router>
    <React.StrictMode>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard_c" component={Dashboard_c} />
            {/* <Route exact path="/how" component={How} /> */}
            <Route exact path="/features" component={Features} />
            <Route exact path="/footer" component={Footer} />
            <Route exact path="/header" component={Header} />
            <Route exact path="/qrcode" component={Qrcode} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/recent" component={Recent} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/aboutus" component={About} />  
            <Route exact path="/regpage" component={RegPage} />
            <Route exact path="/events" component={Events} /> 
            <Route exact path="/userform" component={UserForm} />
            <Route exact path="/Portfolio2" component={Portfolio2} />
            <Route exact path="/eeeeeee" component={eeeeeee} />
            
            

            <Route exact path="/eventForm" component={CreateEvents} />

        </Switch>
        
        
    </React.StrictMode>
</Router>
);

ReactDOM.render(routing, document.getElementById('root'));