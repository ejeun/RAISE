import React, { Component } from 'react';
import './Project.css';

class Project extends Component {
  render() {
    const slide = 'http://placehold.it/700x450';

    return (
      <div className="Project">
        <div className="Project-header">
          <img src={slide} className="Project-slide" alt="slide" />
        </div>
        <div className="Project-description">
        <h3>Project name</h3>
        <p>
          Description.
        </p>
        </div>
      </div>
    );
  }
}

export default Project;
