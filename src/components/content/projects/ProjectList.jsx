import React, { Component } from 'react';
import axios from 'axios';

import Project from './Project';
import './ProjectList.css';

class Content extends Component {
    constructor(){
        super();
        this.state = {
            projects: []
        }
    }
    componentWillMount(){
        const self = this;
        axios.get('https://api.github.com/users/survivorbat/repos')
            .then(function (response) {
                self.setState({projects: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <section>
                <h4>Active projects:</h4>
                <div className="card-deck">
                    {this.state.projects.filter(project => project.archived === false).sort((a,b) => {return new Date(a.updated_at)>new Date(b.updated_at) ? -1 : a<b ? 1 : 0;}).map((project, key) => <Project project={project} key={key}/>)}
                </div>
                <h4>Archived / old projects:</h4>
                <div className="card-deck">
                    {this.state.projects.filter(project => project.archived === true).sort((a,b) => {return new Date(a.updated_at)>new Date(b.updated_at) ? -1 : a<b ? 1 : 0;}).map((project, key) => <Project project={project} key={key}/>)}
                </div>
            </section>
        );
    }
}

export default Content;
