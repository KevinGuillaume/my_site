import React from "react";
import "../styles/AboutMe.css";
import PageIcon from "./pageHelperComponents/PageIcon";
import PageTabMenu from "./pageHelperComponents/PageTabMenu";
import PageContent from "./pageHelperComponents/PageContent";
/**
 * Home Icon page that shows a brief introduction
 * @returns AboutMe Component
 */
function AboutMe() {
    //This is the main tab on the about me page
  const intro = [{
    title: 'About Me',
    desc: "About me I started coding around my high school days, but got a lot more into it during my senior yearof high school. Since then I've been interested in creating projects and interacting with different frameworks,languages, or tools. I'm trying to graduate college a year early so that I can have time to really understand and learn concepts deeply. It's always a great and rewarding feeling seeing something you envision come to life with just lines of codes. When I'm not coding you can find me playing basketball with some friends. I grew up playing basketball and play now recreationally or sometimes competetivly in some men's leagues. Blockchain has also been something that has caught my eye. I like to read up on current topics surround the web3 world. Oh, and I'm also a big fan of video games and I'm always looking for some new recommandations so send them my way."
}];

  return (
    <div className="back-drop-container">
      <PageIcon iconName="home" />
      <PageTabMenu tabList={intro} />
      <PageContent pageDetails={intro[0]} />
    </div>
  );
}

export default AboutMe;
