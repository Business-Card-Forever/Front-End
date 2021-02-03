import Header from './components/header/header'
// import Login from './components/login/login';
// import SignIn from './components/signin/signin';
import Features from './components/features/features';
import Dasboard from "./components/dashboard/dashboard";
import Recent from "./components/recent/recent";
import Footer from './components/footer/footer';
import Events from './components/events/events';

import RegistrationForm from './components/regPage/reg'

function App() {
  return (
    <div className="App">

    <Header />
      {/* <Login/>
      <SignIn/> */}
      {/* <Dasboard/> */}
      {/* <RegistrationForm /> */}
      <Features/>
      <Recent/>
      <Events/>
      <Footer />
    </div>
  );
}

export default App;
