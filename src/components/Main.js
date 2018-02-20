import React, { Component } from 'react';
import SplashAnimation from './SplashAnimation';
import Gallery from './Gallery';
// import Sidebar from './Sidebar';
import Sidebar from 'react-sidebar';
import './Main.css';

class Main extends Component {

  constructor() {
    super();
    this.state = {
      splash: true,
      sidebar: ''
    };
    this.onSetSideBar = this.onSetSideBar.bind(this)
  }

  onSetSideBar(stringStatus) {
      this.setState({sidebar: stringStatus});
  }

  render() {

      const content = <div className="Sidebar-content">
              <p className='Sidebar-line'>Thursday 8/10 </p>
              <p className='Sidebar-line'>Mental Health Workshop @ TRC</p>
              <p className='Sidebar-line'>Tuesday 8/15</p>
              <p className='Sidebar-line'>Writing Workshop with Bushra @ AAWW</p>
              <p className='Sidebar-line'>Friday 8/18</p>
              <p className='Sidebar-line'>General Meeting @ AALDEF 14th Fl</p>
      </div>;

    return (
        <Sidebar
            sidebar={content}
            open={this.state.sidebar}
            onSetOpen={this.onSetSideBar}
            pullRight={true}
            shadow={false}
            styles={{
                overlay: {backgroundColor: 'inherit'},
                sidebar: {width: '50vw', backgroundColor: 'black',
                    color: 'white'}
            }}>
          <div
            className={this.state.splash ? "Main-splash" : "Main"}
            onClick={() => this.setState({ splash: false })}>
            <div className="Main-container">
              <p className="Main-RAISE"> RAISE </p>
              <br />
              <div className="Main-Links">
                <p
                  className={this.state.sidebar === 'info' ? 'selected' : ''}
                  onClick={()=> this.setState({ sidebar: 'info'})}
                >
                  {this.state.sidebar === 'info' ? '— Info' : 'Info'}
                </p>
                <p
                  className={this.state.sidebar === 'events' ? 'selected' : ''}
                  onClick={()=> this.setState({ sidebar: 'events'})}
                >
                  {this.state.sidebar === 'events' ? '— Events' : 'Events'}
                </p>
              </div>

              {this.state.splash ?
                <SplashAnimation /> :
                <Gallery />
              }

            </div>
          </div>
        </Sidebar>
    );
  }
}

export default Main;
