import React, { Component } from "react"
import "./Content.css"
import { Modal, Container, Chip } from "react-materialize"
import {connect} from "react-redux"
import ProjectList from "./projects/ProjectList"

class Content extends Component {
  render() {
    return (
      <Container>
        <div className="content-buttons">
          <div className="valign-wrapper" style={{justifyContent: "space-around", flexDirection: "row"}}>
            <Modal trigger={<button className="btn-bottom">About me</button>}>
                <h3>About me</h3>
                <p>
                  Hello there! I am Maarten, a junior software developer that enjoys trying out new technologies and frameworks a lot. 
                </p>
                <p>
                  I have been into webdevelopment since the age of eleven, after school I'd type away at my laptop in the living room assembling websites from scratch.
                  During these days I only knew HTML and a little bit of CSS so obviously they weren't pretty or nice to look at.
                  But it worked! And that was extremely exciting for twelve year-old me.
                  I also taught myself a little bit of PHP and MySQL in order to generate dynamic web pages and use forms.
                  Obviously I had no idea what MVC or MVVM even meant and I usually just dropped all my code in one index.php file which resulted in non-existent maintainability, but that didn't matter since I was still learning.
                  While attending highschool I figured out how to work with CSS properly and I finally found out how to work with a div element on a webpage and started making more advanced applications.
                </p>
                <p>
                  In 2017 I began studying Javascript because I wanted to make my webpages more dynamic, I also discovered Ajax and I started to understand the beauty of asynchronously loading in data from an API.
                  Nowadays you'll find me working with frameworks like ReactJS, Slim, Redux, Bootstrap and Angular which I use extensively to build my apps faster than I ever could.
                </p>
                <p>
                  At the moment my dream is to create a game like Agar.io or Moomoo.io and build a fanbase around it.
                </p>
            </Modal>
            <Modal trigger={<button className="btn-bottom">Technologies</button>}>
              <h3>Technologies</h3>
              <p>As mentioned I have worked with a variety of programming languages and technologies. My favourite languages are Javascript and PHP. My favourite frameworks are ReactJS bundled with Redux and the Slim framework in PHP.</p>
              <p>Currently the technologies and languages used in my public projects are:</p>
              {this.props.projects.technologies.map((item, key) => <Chip close={false} key={key}>{item}</Chip>)}
            </Modal>
            <Modal trigger={<button className="btn-bottom">Projects</button>}>
              <ProjectList/>
            </Modal>
            <Modal trigger={<button className="btn-bottom">Contact</button>}>
                <h3>Contact</h3>
                <p>You can find me on <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/maarten-van-der-heijden-webdev">Linkedin</a>, view my repositories at <a rel="noopener noreferrer" target="_blank" href="https://github.com/survivorbat">Github</a> and you can also send me an e-mail me through <a href="mailto:djbatcat@gmail.com">djbatcat@gmail.com</a></p>
            </Modal>
          </div>
        </div>
      </Container>
    )
  }
}

function mapStateToProps(store) {
  return store
}
export default connect(mapStateToProps)(Content)