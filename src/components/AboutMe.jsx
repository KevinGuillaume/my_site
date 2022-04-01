import React from 'react'
import Draggable from 'react-draggable'
import "./AboutMe.css"

function AboutMe() {
    return (
        <div>
            <Draggable>
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
            </Draggable>
        </div>
    )
}

export default AboutMe
