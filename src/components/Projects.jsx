import React from 'react'
import './Projects.css'
import Draggable from 'react-draggable'

function Projects() {

    return (
        <div>
            <Draggable>
                <div className="projects-box" >
                    <div>
                        <div className="projects-exit">
                            <div className="x-btn"></div>
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
            </Draggable>
        </div>
    )
}

export default Projects
