import React from 'react';
import './App.css';
import Projects from "./components/Projects"
import AboutMe from "./components/AboutMe"
import Nav from "./components/Nav"
import Particle from "./components/Particle"
import Clock from "./components/Clock"
import {useDispatch} from 'react-redux'
import { changeAbout, changeProjects } from './actions';

function App() {
  const dispatch = useDispatch();
  var counter = 1;
  
  const bringToFront = () =>{
    var about = document.querySelector('#aboutme');
    about.style.zIndex = ++counter;
  }
  const bringToFront2 = () =>{
    var proj = document.querySelector('#projs');
    proj.style.zIndex = ++counter;
  }
  
  
  {/* <div className="item" onClick={()=> dispatch(changeAbout())}>about</div>
          <div className="item" onClick={() => dispatch(changeProjects())}>projects</div>
          <div className="item"><a className= "gitLink"href="https://github.com/KevinGuillaume">github</a></div>
 */}
  


  
  return (
    
    <div className="App">
      <Particle />
      <div className="page-container">
        <div className="top-label">
          <div className="myName">Kevin Guillaume</div>
          <div className="timeAndDisplay">
              <div>Symbol</div>
              <Clock />
          </div>
          
        </div>
        <div className ="nav-bar">
          <Nav />
        </div>
        <div className="page-content">
          <div id="aboutme" className="box-sizing" onClick={bringToFront}>
            <AboutMe />
          </div>
          <div id="projs" className ="box-sizing" onClick={bringToFront2}>
            <Projects/>
          </div>
        </div>
      </div>
      
    </div>
    
  );
}

export default App;