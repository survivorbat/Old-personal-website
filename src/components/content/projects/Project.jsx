import React from "react"

export default ({project}) =>
  <div className="card small">
    <div className="card-content">
      <h4 className="card-title font-weight-bold" style={{whiteSpace: "normal"}}><a href={project.svn_url}>{project.name.replace(/-/g," ")}</a></h4>
      <small>Main language: {project.language}</small>
      <p className="card-text" style={{maxHeight: "70%"}}>{project.description}</p>
      <br/>
      {project.homepage!==null && project.homepage!=="" ? <a href={project.homepage}>Demo</a> :null}
    </div>
  </div>
