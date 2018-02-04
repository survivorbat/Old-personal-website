import React, { Component } from 'react';
import Project from './Project';
import autoBind from 'react-autobind';
import {connect} from 'react-redux';

import { getProjects } from '../../../actions/projectsActions';

class ProjectList extends Component {
    constructor(){
        super();
        autoBind(this);
    }
    componentWillMount(){
        this.props.dispatch(getProjects());
    }
    render() {
        const projects = this.props.projects.projects;
        return (
            <section>
                <h4>Active projects:</h4>
                <div className="card-deck">
                    {projects.filter(project => project.archived === false).map((project, key) => <Project project={project} key={key}/>)}
                </div>
                <h4>Archived / old projects:</h4>
                <div className="card-deck">
                    {projects.filter(project => project.archived === true).map((project, key) => <Project project={project} key={key}/>)}
                </div>
            </section>
        );
    }
}
function mapStateToProps(store) {
    return store;
}
export default connect(mapStateToProps)(ProjectList);