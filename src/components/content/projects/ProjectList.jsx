import React, { Component } from "react"
import Project from "./Project"
import {Row, Col} from "react-materialize"

export default class ProjectList extends Component {
    componentWillMount(){
        if(this.props.projects.length < 1) {
            this.props.getProjects()
        }
    }
    render() {
        const projects = this.props.projects
        return (
            <section>
                <Row>
                    <Col m={12}>
                        <h4>Active projects:</h4>
                    </Col>
                </Row>
                <Row>
                    {projects.filter((project) => project.archived === false).sort((a,b) => {return new Date(a.updated_at)<new Date(b.updated_at)}).map((project, key) => 
                        <Col l={4} m={4} s={12} key={key}>
                            <Project project={project}/>
                        </Col>
                    )}
                </Row>
                <Row>
                    <Col m={12}>
                        <h4>Archived projects:</h4>
                    </Col>
                </Row>
                <Row>
                    {projects.filter((project) => project.archived === true).sort((a,b) => {return new Date(a.updated_at)<new Date(b.updated_at)}).map((project, key) => 
                        <Col l={4} m={6} s={12} key={key}>
                            <Project project={project}/>
                        </Col>
                    )}
                </Row>
            </section>
        )
    }
}