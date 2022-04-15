import React from 'react';
import './App.css';
import Projects from "./components/Projects"
import AboutMe from "./components/AboutMe"
import {useSelector,useDispatch} from 'react-redux'
import { changeAbout, changeProjects } from './actions';

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      
      <div className="page-container">
        <div className="nav">
          <div className="item" onClick={()=> dispatch(changeAbout())}>about</div>
          <div className="item" onClick={() => dispatch(changeProjects())}>projects</div>
          <div className="item"><a className= "link"href="https://github.com/KevinGuillaume">github</a></div>
          
          
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