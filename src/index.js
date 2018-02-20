import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  browserHistory,
  IndexRedirect
  } from 'react-router';
import './index.css';
import Test from './components/App';
import Home from './components/Home';
import Main from './components/Main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRedirect to="/home" />
      <Route path="home" component={Home} />
      <Route path="testapp" component={Test} />
    </Route>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
