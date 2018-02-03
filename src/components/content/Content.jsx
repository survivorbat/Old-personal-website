import React, { Component } from 'react';
import './Content.css';

import ProjectList from './projects/ProjectList';

class Content extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Maarten</h2>
            <p>...</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2>My projects</h2>
            <p>...</p>
            <ProjectList/>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
