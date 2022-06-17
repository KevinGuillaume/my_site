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
                            
                                <div className="job">New Grad Software Engineer 💻</div>
                            </div>
                            <div className="line"> </div>
                            <div className="bio">
                                Thanks for checking out my site. 
                                It started off completely different, then slowly transitioned to what it is now.
                                There are still different things I want to change or fix, but it has been cool just playing around with it.
                                <br />
                                <br/>
                                <b>About me</b>
                                
                                <br/>
                                I started coding around my high school days, but got a lot more into it during my senior year of high school.
                                Since then I've been interested in creating projects and interacting with different frameworks,languages, or tools.
                                I'm trying to graduate college a year early so that I can have time to really understand and learn concepts deeply.
                                It's always a great and rewarding feeling seeing something you envision come to life with just lines of codes. 
                                <br />
                                <br />
                                When I'm not coding you can find me playing basketball with some friends.
                                I grew up playing basketball and play now recreationally or sometimes competetivly in some men's leagues.
                                Blockchain has also been something that has caught my eye. I like to read up on current topics surround the web3 world.
                                Oh, and I'm also a big fan of video games and I'm always looking for some new recommandations so send them my way. 

                                
                                
                            </div>
                            <br />
                            
                            <div className="line"> </div>
                            <div className="middle">
                                <div className="label">Currently Learning 📖:</div>
                                <ul className="item-list">
                                    <li>TypeScript</li>
                                    <li>Solidity/Ethers</li>
                                    <li>Hardhats</li>
                                    <li>Next.js</li>
                                </ul >
                                <div className="label">Interested In 🔥:</div>
                                <ul className="item-list">
                                    <li>Movies,Animes,Chess *Not that good at it haha*</li>
                                    <li>Blockchain,DeFi,NFTs,DAOs</li>
                                    <li>Basketball</li>
                                </ul>
                                <div className="label">Experience 🏗️:</div>
                                <ul className="item-list">
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
