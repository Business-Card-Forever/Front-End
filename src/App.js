import Header from './components/header/header'
// import Login from './components/login/login';
// import SignIn from './components/signin/signin';
import Features from './components/features/features';
import Dashboard from "./components/dashboard/dashboard";
import DashboardCompany from './components/dashboard_c/dashboard_c'
import Recent from "./components/recent/recent";
import Footer from './components/footer/footer';
import How from './components/HowitWork/how';
import QR from './components/Qrcode/Qrcode';
import PortfoiRege   from "./components/PortfoiRege/PortfoiRege";
import RegistrationForm from './components/regPage/reg'

function App() {
  return (
    <div className="App">

    {/* <Header /> */}
    {/* <Login/>
      <SignIn/> */}
       {/* <RegistrationForm />  */}
      {/* <Dashboard/>
      <DashboardCompany/> */}
      {/* <Dashboard/>

     <DashboardCompany/> */}
     <PortfoiRege/>
     <DashboardCompany/>
     <Dashboard/>
      {/* <QR/>  */}
      {/* <Features/>
      <Recent/>
      <How/>
      <Footer /> */}
    </div>
  );
}

export default App;

