import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from 'react-router-dom';

import Registration from './components/Registration/Registration';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer' 
import Login from './components/Login/Login'
import HomePage from './components/HomePage/homePage';


function App() {

  return (
    
    <Router>
      <Header />

      <Switch>
        <Route exact path='/'>
          {/*Put homepage here */}
        </Route>

        <Route exact path='/LandingPage'>
          <LandingPage />
        </Route>

        <Route exact path='/LoginPage'>
          <LoginPage />
        </Route>

        <Route exact path='/ProblemBoardPage'>
          <ProblemBoardPage />
        </Route>

        <Route path='/'>
          <ProblemBoardPage />
        </Route>
      </Switch>

      <Footer />
    </Router>
    
  );
}

export default App;
