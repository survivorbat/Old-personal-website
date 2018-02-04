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
            <p>
              Hello there! I am Maarten, a junior software developer that enjoys trying out new technologies and frameworks a lot. 
              Please feel free to look at the projects I published down below or send me a message on Linkedin.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2>Contact me</h2>
            <p>You can find me on <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/maarten-van-der-heijden-webdev">Linkedin</a>, view my repositories at <a rel="noopener noreferrer" target="_blank" href="https://github.com/survivorbat">Github</a> and you can also send me an e-mail me through <a href="mailto:djbatcat@gmail.com">djbatcat@gmail.com</a></p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2>My projects</h2>
            <p>
              I have a lot of projects stored in the cloud over at GitHub. By using their API I've built a little display below here. 
              Clicking on the title of the project will bring you to the source code of that project.
              Currently I'm mostly focused on webdevelopment but I have actually done some Android and Java development in the past, mostly for school assignments.
            </p>
            <ProjectList/>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
