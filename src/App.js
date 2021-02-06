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
import PortfoiRege   from "./components/PortfoiRege/PortfoiRege";
import RegistrationForm from './components/regPage/reg'
import About from './components/Aboutus/aboutus';
import UserForm from './components/UserForm/UserForm';
import Portfolio2 from './components/Portfolio2';
import Events from "./components/events/renderedEvents";


function App() {
  return (
    <>
    <div className="App">

    <Header />
    {/* <Login/> */}


      {/* <RegistrationForm/> */}
      
      <Recent/>
      {/* <How/> */}
      <Footer />
      </div>
    </>
  );
}

export default App;

