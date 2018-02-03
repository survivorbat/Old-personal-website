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
            <p>Hello there! I am Maarten, a junior software developer that enjoys trying out new technologies and frameworks a lot.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2>My projects</h2>
            <p>I have a lot of projects stored in the cloud over at GitHub. By using their API I've built a little display below here. 
              Clicking on the title of the project will bring you to the source code of that project.</p>
            <ProjectList/>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
