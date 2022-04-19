import React from 'react'
import Draggable from 'react-draggable'
import "../styles/AboutMe.css"
import {useSelector, useDispatch} from 'react-redux'
import {changeAbout} from '../actions'

function AboutMe() {
    const canDisplayAbout = useSelector(state => state.displayAbout);
    let dispatch = useDispatch()
   
    return (
        
        <div>
            {canDisplayAbout ? 
            <Draggable>
                <div className="back-border">
                    <div className="header-exit">
                            <div className="x-btn" onClick={()=> dispatch(changeAbout())}></div>
                    </div>
                    <div className="main-box">
                        
                        <div className="content">
                            <div className="greeting">
                            <div className="gm">👋 gm, I'm Kevin </div>
                            
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
                                    <li>Blockchain,DeFi,NFTs,DAOs</li>
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
                </div>
            </Draggable>
            : ''}
        </div>
    )
}

export default AboutMe
