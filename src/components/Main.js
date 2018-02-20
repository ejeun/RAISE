import React, { Component } from 'react';
import SplashAnimation from './SplashAnimation';
import Gallery from './Gallery';
import Sidebar from './Sidebar';
import './Main.css';

class Main extends Component {

  constructor() {
    super();
    this.state = {
      splash: true,
      sidebar: ''
    };
  }

  render() {

    return (
      <div
        className={this.state.splash ? "Main-splash" : "Main"}
        onClick={() => this.setState({ splash: false })}>
        <div className="Main-container">
          <p className="Main-RAISE"> RAISE </p>
          <br />
          <div className="Main-Links">
            <p
              className={this.state.sidebar == 'info' ? 'selected' : ''}
              onClick={()=> this.setState({ sidebar: 'info'})}
            >
              {this.state.sidebar == 'info' ? '— Info' : 'Info'}
            </p>
            <p
              className={this.state.sidebar == 'events' ? 'selected' : ''}
              onClick={()=> this.setState({ sidebar: 'events'})}
            >
              {this.state.sidebar == 'events' ? '— Events' : 'Events'}
            </p>
          </div>

          {this.state.splash ?
            <SplashAnimation /> :
            <Gallery />
          }

          {this.state.sidebar ?
            <Sidebar
              selected={this.state.sidebar}
            /> :
            null
          }

        </div>
      </div>
    );
  }
}

export default Main;
