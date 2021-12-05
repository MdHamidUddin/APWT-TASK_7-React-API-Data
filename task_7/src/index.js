import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './Components/Home';
import Nav from './Components/Nav';
import Student from './Components/Student';
import Contact from './Components/Contact';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'; 
import ColorState from './Components/ColorState';
import EffctHookCheck from './Components/EffectHookCheck';
import AllPost from './Components/AllPost';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Nav/>
      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>


        <Route exact path="/Contact">
            <Contact/>
        </Route>


        <Route exact path="/Student">
            <Student/>
        </Route>

        <Route exact path="/color">
            <ColorState/>
        </Route>
        <Route exact path="/EffectHook">
            <EffctHookCheck/>
        </Route>

        <Route exact path="/post">
            <AllPost/>
        </Route>

      </Switch>
    </Router>
    
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
