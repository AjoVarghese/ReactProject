
// import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Bikes from './Pages/User/Bikes/Bikes';
import Home from './Pages/User/Home/Home';

import Login from "./Pages/User/Login/Login";
import Otplogin from './Pages/User/OTPlogin/Otplogin';
import Profile from './Pages/User/Profile/Profile';
import Signup from "./Pages/User/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path = '/' element = {<Home/>}> </Route>
          <Route exact path = '/signup' element = {<Signup/>}></Route>
          <Route exact path='/login' element = {<Login/>}></Route>
          <Route exact path='/bikes' element = {<Bikes/>}></Route>
          <Route exact path='/otp_login' element = {<Otplogin/>}></Route>
          <Route exact path = '/profile' element = {<Profile/>}></Route>


          {/* admin */}
          {/* <Route exact path='' element = {<}></Route> */}
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
