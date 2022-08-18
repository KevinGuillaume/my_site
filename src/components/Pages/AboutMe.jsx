import React from "react";
import "../../styles/Pages/AboutMe.css";

import PageIcon from "../pageHelperComponents/PageIcon";
import PageTabMenu from "../pageHelperComponents/PageTabMenu";
import PageContent from "../pageHelperComponents/PageContent";
import BackDropContainer from "../UI/BackDropContainer";
import AnimatedPage from "../AnimationComponents/AnimatedPage";
import BackAndTitle from "../pageHelperComponents/BackAndTitle";
import { useState } from "react";

//This is the main tab on the about me page
const intro = [
  {
    title: "About Me",
    pic: "aboutme",
    desc: "My names Kevin, and I am a Software Engineer. I first became interested in coding around 17 years old. Since then I've been interested in creating projects and interacting with different frameworks,languages, or tools. I attended Loyola University Chicago where I earned a Bachelor's degree in Computer Science, and a minor in Mathematics. When I'm not coding you can almost always find me playing basketball with some friends. I'm also a big fan of video games and I'm always looking for some new recommandations so send them my way.",
    url:''
  },
  {
    title: 'Contact',
    desc: 'If you are looking to get in touch feel free to contact me from any of the links above. I will try my best to get back promptly.',
    url: ''
  }
];

/**
 * Home Icon page that shows a brief introduction
 * @returns AboutMe Component
 */
function AboutMe() {
  


  const [currTab, setCurrTab] = useState(intro[0]);

  


  //Pulls the selected tab from the PageTabMenu Components
  const changeSelectedContent = (selectedTab) => {
    intro.forEach((section) => {
      if (section.title === selectedTab) {
        //Set our current tab to the corresponding project
        setCurrTab(section);
      }
    });
  };

  return (
    <AnimatedPage>
      <BackDropContainer>
        <BackAndTitle label="Home" />
        <PageIcon iconName="home" />
        <div className="tab-and-content-container">
          <PageTabMenu tabList={intro} onChangeSelectedTab={changeSelectedContent}/>
          <PageContent pageDetails={currTab} />
        </div>
      </BackDropContainer>
    </AnimatedPage>
  );
}

export default AboutMe;
