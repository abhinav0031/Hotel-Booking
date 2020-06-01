import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Booking from './components/booking/Booking';
import AuthState from './context/auth/AuthState';
import Hotels from './components/booking/Hotels';
import HotelRegister from './components/hotelregister/HotelRegister';
function App() {
  return (
    <AuthState>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/registerhotel' component={HotelRegister} />
            <Route exact path='/booking' component={Booking} />
            <Route exact path='/booking/:location' component={Hotels} />
          </Switch>
        </Fragment>
      </Router>
    </AuthState>
  );
}

export default App;
