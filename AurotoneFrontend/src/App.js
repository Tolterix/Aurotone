import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from 'react-router-dom';

import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Landing } from './components/Landing/Landing'

export default function App() {

  return (
    <Router>
      { window.location.pathname.includes('login') || window.location.pathname.includes('landing') ? null : <Header /> }

      <Switch>
        <Route exact path='/'>
          {/*Put homepage here */}
        </Route>

        <Route exact path='/landing'>
          <Landing />
        </Route>

        <Route exact path='/login'>
          {/* <LoginPage /> */}
        </Route>
      </Switch>

      { window.location.pathname.includes('login') || window.location.pathname.includes('landing') ? null : <Footer /> }
    </Router>
    
  );
}