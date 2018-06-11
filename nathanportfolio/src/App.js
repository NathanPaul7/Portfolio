import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Router from 'react-router-dom';
import AboutMe from './components/AboutMe';

class App extends Component {
  render() {
    return (
      <div className="header">
      <NavBar />
      <Projects />
      <AboutMe />
      </div>
    );
  }
}

export default App;
