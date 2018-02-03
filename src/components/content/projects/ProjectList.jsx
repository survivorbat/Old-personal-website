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
                console.log(response.data);
                self.setState({projects: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <ul className="list-group projectlist row">
                {this.state.projects.map((project, key) => <Project project={project} key={key}/>)}
            </ul>
        );
    }
}

export default Content;
