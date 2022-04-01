import React from 'react';
import './App.css';
import Projects from "./components/Projects"
import AboutMe from "./components/AboutMe"


function App() {


  return (
    <div className="App">
      
      <div className="page-container">
        <div className="nav">
          <div className="item">about</div>
          <div className="item">projects</div>
          <div className="item">github</div>
          <div className="item">twitter</div>
          
        </div>
        <div className="page-content">
          <div className="box-sizing">
            <AboutMe />
          </div>
          <div className ="box-sizing">
            <Projects/>
          </div>
        </div>
      </div>
      
    </div>
    
  );
}

export default App;