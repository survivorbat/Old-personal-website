import React, { Component } from "react"

class Content extends Component {
  render() {
    const project = this.props.project
    return (
      <div className="card">
        <div className="card-content">
          <h4 className="card-title font-weight-bold"><a href={project.svn_url}>{project.name.replace(/-/g," ")}</a></h4>
          <small>Main language: {project.language}</small>
          <p className="card-text">{project.description}</p>
          <br/>
          {project.homepage!==null && project.homepage!=="" ? <a href={project.homepage}>Demo</a> :null}
        </div>
      </div>
    )
  }
}

export default Content
