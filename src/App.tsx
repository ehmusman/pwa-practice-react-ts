import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Contact from './components/layout/Contact';
import About from './components/layout/About';
import Users from './components/pwa/Users';

const App:React.FC = () => {
  return (

    <Router>
      <Header />
      <div className="container">
      <div className="p text-dark">
      This Dummy App is an examplle of progressive web app with offline availability and push notification
      </div>
      </div>
      <Switch>
        <Route exact path='/users' component={Users}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/about' component={About}></Route>
      </Switch>
    </Router>
  );
}

export default App;
