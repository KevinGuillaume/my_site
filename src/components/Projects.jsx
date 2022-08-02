import React from 'react'
import '../styles/Projects.css'
import PageIcon from './pageHelperComponents/PageIcon'
import PageTabMenu from './pageHelperComponents/PageTabMenu';


function Projects() {
    const projects = ['Project 1','Project 2', 'Project 3'];
    
    return (
        <div className='back-drop-container'>
            <PageIcon iconName="folder" />
            <PageTabMenu tabList={projects}/>
        </div>
    )
}

export default Projects
