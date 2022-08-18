import React, { Suspense } from "react";
import "./App.css";
import Projects from "./components/Pages/Projects";
import AboutMe from "./components/Pages/AboutMe";
import Nav from "./components/Pages/Nav";
import Particle from "./components/UI/Particle";
import Header from "./components/UI/Header";
import Experience from "./components/Pages/Experience";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import {Loader} from '@react-three/drei'
import PageNotFound from "./components/UI/PageNotFound"

function App() {
  const seeParticles = useSelector((state) => state.displayThemeReducer);

  return (
    <div className="App">
      <Suspense fallback={<Loader />} >
      {seeParticles ? <Particle /> : ""}

      <Header />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      </Suspense>
    </div>
  );
}

export default App;
