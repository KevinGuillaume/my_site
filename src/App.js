import React from 'react';
import './App.css';
import Projects from "./components/Projects"
import AboutMe from "./components/AboutMe"
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
  
  
  

  


  
  return (
    <div className="App">
      
      <div className="page-container">
        <div className="nav">
          <div className="item" onClick={()=> dispatch(changeAbout())}>about</div>
          <div className="item" onClick={() => dispatch(changeProjects())}>projects</div>
          <div className="item"><a className= "gitLink"href="https://github.com/KevinGuillaume">github</a></div>
          
          
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