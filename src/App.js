import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Project from './components/Project';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Slider">
          <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <div className="App-menu">
              <h2>Events</h2>
              <h2>RAISE</h2>
              <h2>Contact</h2>
            </div>
          <h4 className="App-intro">
            Experimenting with features here.
          </h4>
          </div>

          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>

    </div>
    );
  }
}

export default App;
