import React from 'react';
import Nav from './nav/nav'
import Project from './project/project'
import Experience from './experience/experience';
import About from './about/about'
import './style.css';

function App() {
  return (
    <div className='main'>
      <Nav></Nav>
      <Project></Project>
      <Experience></Experience>
      <About></About>
    </div>
  );
}

export default App;
