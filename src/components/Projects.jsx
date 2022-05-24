import React from 'react'
import '../styles/Projects.css'
import Draggable from 'react-draggable'
import {useSelector, useDispatch} from 'react-redux'
import { changeProjects } from '../actions'

function Projects() {
    const canDisplayProjects = useSelector(state => state.displayProjects)
    const dispatch = useDispatch()
    return (
        <div>
            {canDisplayProjects ?
            <Draggable>
                <div className="projects-box" >
                    
                        <div className="header-exit">
                            <div className="x-btn" onClick={() => dispatch(changeProjects())}></div>
                        </div>
                        <div className="projects-grid-container">
                            <div className = "project">
                                <div className ="p1"></div>
                                <div className="tech-used">
                                    <div className ="vue">Vue</div> 
                                    <div className= "firebase">Firebase</div>
                                    <div className="css">HTML/CSS</div> 
                                    <div className= "node">Node</div>
                                </div>
                                
                                {/* <div className="project-description">
                                This was a functional database full of competencies within the company (HBR Consulting). It was restricted to only those in the company using Azure AD authentication through firebase.
                                helped find those qualified in certain areas such as skills/Clients/Certifications.
                                </div> */}

                                <div className='options'>
                                    <div className="opt"><a className="cleanLink" href="#">Visit</a></div>
                                    <div className="opt"><a className="cleanLink" href="#">Code</a></div>
                                </div>
                            </div>
                            <div className = "project">
                                <div className ="p2"></div>
                                <div className="tech-used">
                                    <div className= "react">React</div>
                                    <div className= "firebase">Firebase</div> 
                                    <div className="css">HTML/CSS</div>
                                    <div className="redux">Redux</div>
                                </div>
                                {/* <div className="project-description"> Fantasy Markets was a paper trading
                                application that allowed you and others to create and find games to play together. Sessions are made based on parameters set by the admin. Winner is determined at the end of the set time period.
                                 </div> */}
                                 <div className='options'>
                                    <div className="opt"><a className="cleanLink" href="https://playfantasymarket.web.app/">Visit</a></div>
                                    <div className="opt"><a className="cleanLink" href="https://github.com/MoPatel30/Fantasy-Markets">Code</a></div>
                                </div>
                            </div>
                            <div className = "project">
                                <div className ="p3"></div>
                                <div className="tech-used">
                                    <div className= "react">React</div>
                                    <div className="css">HTML/CSS</div>
                                 </div>
                                {/* <div className="project-description">
                                    This project was meant to help develop and create the current webstie for <a className="link2" href="http://blockchainluc.org">Blockchain@LUC</a>.
                                    API's were used to help fetch coin prices listed at the top. 
                                </div> */}
                                <div className='options'>
                                    <div className="opt"><a className="cleanLink" href="https://blockchainluc.org/">Visit</a></div>
                                    <div className="opt"><a className="cleanLink" href="https://github.com/MoPatel30/Blockchain-LUC-Website">Code</a></div>
                                </div>
                            </div>
                            <div className = "project">
                                <div className ="p4"></div>
                                <div className="tech-used">
                                    <div className="solidity">Solidity</div>
                                    <div className= "react">React</div>
                                     <div className="ethers">Ethers.js</div>
                                     <div className="hardhat">Hardhat</div>
                                </div>
                                {/* <div className="project-description">This is a project built with speedrunethereum. It is a staking application.
                                I've done some other challenges as well which are on my github. Big shoutout to <a className="link2" href="https://austingriffith.com/">@AustinGriffith</a> for this resource.
                                </div> */}
                                <div className='options'>
                                    <div className="opt"><a className="cleanLink" href="https://mystakingattempt-cozykev.surge.sh/">Visit</a></div>
                                    <div className="opt"><a className="cleanLink" href="https://github.com/KevinGuillaume/StakingChallenge1">Code</a></div>
                                </div>
                            </div>
                        </div>
                    
                </div>
            </Draggable>
            : ''}
        </div>
    )
}

export default Projects
