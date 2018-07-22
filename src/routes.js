import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import About from './components/About';
import Home from './components/Home';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/home" component={Home} />
  </Router>
);

export default Routes;