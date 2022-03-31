import React from 'react';
import ReactRain from 'react-rain-animation';
import "react-rain-animation/lib/style.css";
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className="page-container">
        
        <div className="main-box">
          <div className="content">
            <div className="greeting">
              <div className="gm">👋 gm, I'm Kevin</div>
              
              <div className="job">Junior Full-Stack Developer 💻</div>
            </div>
              <div className="middle">
                <div>Currently Learning 📖:</div>
                  <ul>
                    <li>Solidity/Ethers</li>
                    <li>Hardhats</li>
                    <li>Next.js</li>
                  </ul>
                <div>Interested In 🔥:</div>
                  <ul>
                    <li>Web3 Development</li>
                    <li>Blockchain,Defi,Nfts,Daos</li>
                    <li>Basketball</li>
                  </ul>
                <div>Experience 🏗️:</div>
                  <ul>
                    <li>Web Developer Intern @ HBR Consulting</li>
                    <li>Web Developer Blockchain@LUC</li>
                  </ul>
              </div>
          </div>
        </div>
        <div className="projects-box">
          <div className="content">
            <div className="projects-title">
              Projects 👷
            </div>
            <div className="projects-flex-container">
              <div className = "project">
                <div className ="p1"></div>
                <div className="project-description"> For this project I...</div>
              </div>
              <div className = "project">
                <div className ="p2"></div>
                <div className="project-description"> For this project I...</div>
              </div>
              <div className = "project">
                <div className ="p3"></div>
                <div className="project-description"> For this project I...</div>
              </div>
              <div className = "project">
                <div className ="p4"></div>
                <div className="project-description"> For this project I...</div>
              </div>
            </div>


            


          </div>
        </div>
      </div>
      
    </div>
    
  );
}

export default App;