import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Contact from './components/layout/Contact';
import About from './components/layout/About';

const App:React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/about' component={About}></Route>
      </Switch>
    </Router>
  );
}

export default App;
