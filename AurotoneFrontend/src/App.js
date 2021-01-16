import React from 'react';
import './App.css';
import { GlobalContext } from './GlobalState'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import LandingPage from './components/LandingPage/LandingPage'

export default function App() {
  let context = React.useContext(GlobalContext)

  console.log(context.firstTime + "|" + window.location.pathname)
  return (
    <Router>

      {
        context.firstTime ?
          null
          :
          <Header />
      }
      
      <Switch>
        <Route exact path='/'>
          {
            context.firstTime ?
              <LandingPage />
              :
              null
              //<LoginPage />
          }
        </Route>

        <Route exact path='/LandingPage'>
          {/* <LandingPage /> */}
        </Route>

        <Route exact path='/LoginPage'>
          {/* <LoginPage /> */}
        </Route>

        <Route exact path='/ProblemBoardPage'>
          {/* <ProblemBoardPage /> */}
        </Route>

        <Route path='/'>
          {/* <ProblemBoardPage /> */}
        </Route>
      </Switch>

      {
        context.firstTime ?
          null
          :
          <Footer />
      }

      {
        context.firstTime === true ? context.firstTime = false : null
      }
    </Router>
    
  );
}