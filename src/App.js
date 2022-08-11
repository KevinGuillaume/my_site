import React from "react";
import "./App.css";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Nav from "./components/Nav";
import Particle from "./components/Particle"
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Experience from "./components/Experience";
import { Route, Routes } from "react-router-dom";
import {useSelector} from "react-redux"

function App() {
  const seeParticles = useSelector((state) => state.displayThemeReducer);

  
  return (
    <div className='App'>
      {seeParticles ? <Particle /> : ''}
      
      <Header />
      <div className="page-content">
        <Routes>
          <Route path='/' element={<Nav />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
