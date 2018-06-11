import React, { Component } from 'react'
import './Header.css'
import { Row, Col, Container } from 'react-materialize'
import Particles from 'react-particles-js'

const params = {
  particles: {
    number: {
      value: 200,
      density: {
        value_area: 2000
      },
      shadow: {
        enable: true,
        color: "005dff",
        blur: 2
      }
    },
    color: {
      value: "#4fa8f1"
    },
    line_linked: {
      color: "#4fa8f1",
      opacity: 0.8
    },
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 800,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 800,
        "size": 80,
        "duration": 2,
        "opacity": 0.8,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

class Header extends Component {
  render() {
    return (
      <header>
        <Particles style={{position:"absolute"}} params={params}/>
          <Container>
            <div className="valign-wrapper center" style={{height:"100vh", width:"100%"}}>
              <Row style={{width: "100%"}}>
                <Col s={12} m={12} l={12}>
                    <h1>Maarten van der Heijden</h1>
                </Col>
              </Row>
            </div>
          </Container>
      </header>
    )
  }
}

export default Header
