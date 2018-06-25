import React, { Component } from "react"
import Project from "./Project"
import autoBind from "react-autobind"
import {connect} from "react-redux"
import {Row, Col} from "react-materialize"
import { getProjects } from "../../../actions/projectsActions"


class ProjectList extends Component {
    constructor(){
        super()
        autoBind(this)
    }
    componentWillMount(){
        if(this.props.projects.projects.length < 1) {
            this.props.dispatch(getProjects())
        }
    }
    render() {
        const projects = this.props.projects.projects
        return (
            <section>
                <Row>
                    <Col m={12}>
                        <h4>Active projects:</h4>
                    </Col>
                </Row>
                    {projects.filter((project) => project.archived === false).sort((a,b) => {return new Date(a.updated_at)<new Date(b.updated_at)}).map((project, key) => 
                        <Project project={project} key={key}/>
                    )}
                <Row>
                    <Col m={12}>
                        <h4>Archived projects:</h4>
                    </Col>
                </Row>
                {projects.filter((project) => project.archived === true).sort((a,b) => {return new Date(a.updated_at)<new Date(b.updated_at)}).map((project, key) => 
                    <Project project={project} key={key}/>
                )}
            </section>
        )
    }
}
function mapStateToProps(store) {
    return store
}
export default connect(mapStateToProps)(ProjectList)