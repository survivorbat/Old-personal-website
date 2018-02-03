import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
