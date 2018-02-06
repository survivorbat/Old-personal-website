import React, { Component } from 'react';

class Content extends Component {
  render() {
    const project = this.props.project;
    return (
      <div className="col-md-4 col-xs-12 pb-2">
        <div className="card">
          <div className="card-block">
            <h4 className="card-title font-weight-bold"><a href={project.svn_url}>{project.name.replace(/-/g," ")}</a></h4>
            <p className="card-text text-muted"><small>Last updated: {project.updated_at.substring(0,10)}</small></p>
            <p className="card-text">{project.description}</p>
            <p className="card-text"><small>Main language: {project.language}</small></p>
            {project.homepage!==null && project.homepage!=="" ? <a href={project.homepage}><button className="btn btn-primary btn-block"><strong>Demo</strong></button></a> : <div/>}
          </div>
          <div className="card-footer">
            <small className="text-muted">Created: {project.created_at.substring(0,10)}</small>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
