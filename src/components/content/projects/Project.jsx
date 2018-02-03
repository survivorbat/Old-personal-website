import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <div className="col-md-4 col-xs-12 pb-2">
        <div className="card">
          <div className="card-block">
            <h4 className="card-title font-weight-bold"><a href={this.props.project.svn_url}>{this.props.project.name.replace(/-/g," ")}</a></h4>
            <p className="card-text text-muted"><small>Last updated: {this.props.project.updated_at.substring(0,10)}</small></p>
            <p className="card-text">{this.props.project.description}</p>
            <p className="card-text"><small>Main language: {this.props.project.language}</small></p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Created: {this.props.project.created_at.substring(0,10)}</small>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
