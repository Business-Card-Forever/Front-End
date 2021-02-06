import Header from './components/header/header';
import Login from './components/login/login';
// import SignIn from './components/signin/signin';
import Features from './components/features/features';
import Dashboard from "./components/dashboard/dashboard";
import DashboardCompany from './components/dashboard_c/dashboard_c';
import Recent from "./components/recent/recent";
import Footer from './components/footer/footer';
import How from './components/HowitWork/how';
import QR from './components/Qrcode/Qrcode';
import PortfoiRege from "./components/PortfoiRege/PortfoiRege";
import RegistrationForm from './components/regPage/reg'
import About from './components/Aboutus/aboutus';
import UserForm from './components/UserForm/UserForm';
import Portfolio2 from './components/Portfolio2';
import { Col } from "react-bootstrap";
import Events from "./components/events/renderedEvents";


function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Col className="zoom " xs={12} md={5} xl={5} lg={5}>
          <div className='bgText'>
            <h2 className="text-center h22">E-BCard</h2>
            <h4 className="text-center" > <span> One Business Card </span><br />Updated, Accessible, Available  <br /> For Ever</h4>
          </div>
        </Col>
 <div className="dash-emptyDiv"></div>

        
        <Features />
        <Recent />
        <How />
        <Footer />
      </div>
    </>
  );
}

export default App;

