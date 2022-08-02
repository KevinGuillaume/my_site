import React from 'react'
import "../styles/AboutMe.css"
import PageIcon from './pageHelperComponents/PageIcon'
import PageTabMenu from './pageHelperComponents/PageTabMenu';

function AboutMe() {
    const intro = ['Introduction'];
   
    return (
        <div className='back-drop-container'>
            <PageIcon iconName="home"/>
            <PageTabMenu tabList={intro} />
        </div>
        
    )
}

export default AboutMe
