import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
                <h1>Maarten van der Heijden</h1>
            </div>
            <div className="col-md-6">
                <h2>Software development has never been this much fun!</h2>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
