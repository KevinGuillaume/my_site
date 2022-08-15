import React, { useState } from "react";
import "../../styles/Pages/Projects.css";
import PageIcon from "../pageHelperComponents/PageIcon";
import PageTabMenu from "../pageHelperComponents/PageTabMenu";
import PageContent from "../pageHelperComponents/PageContent";
import BackDropContainer from "../UI/BackDropContainer";
import AnimatedPage from "../AnimationComponents/AnimatedPage";
import BackAndTitle from "../pageHelperComponents/BackAndTitle";

const projects = [
  {
    title: "Keno Kozie",
    pic: "keno",
    desc: "internal company knowledge sharing database. Allowed those within the company to find certain individuals qualified in different areas. It facilitated communication by providing contact information as well.",
    technology: ["Vue", "Firebase", "Node", "HTML/CSS"],
    url: ''
  },
  {
    title: "Fantasy Markets",
    pic: "fantasy",
    desc: "Stock trading simulator game that allows one to compete with friends over a max of two week period. Winner is chosen based on the amount of gains made over the duration of the game.",
    technology: ["React", "Firebase", "HTML/CSS", "Redux"],
    url: 'https://playfantasymarket.web.app/'
  },
  {
    title: "Blockchain@LUC",
    pic: "blockchain",
    desc: "Club website for the blockchain club at Loyola University Chicago. This was a resource for members and others to gain familiarity about the club, and about blockchain technology.",
    technology: ["React", "HTML/CSS", "API"],
    url:'https://blockchainluc.org/'
  },
  {
    title: "API Fun",
    pic: "apifun",
    desc: "Learning resource I made to help better understand concepts that revolve around the use of APIs by using a random quote generator. It reviews concepts like Async/sync and Promises in javascript.",
    technology: ["React", "HTML/CSS", "API"],
    url:'https://apifun.netlify.app/'
  },
];


/**
 * Project component which is the project page that lists all projects and their information.
 * @returns Project Page
 */
function Projects() {
  const [currTab, setCurrTab] = useState(projects[0]);

  


  //Pulls the selected tab from the PageTabMenu Components
  const changeSelectedContent = (selectedTab) => {
    projects.forEach((project) => {
      if (project.title === selectedTab) {
        //Set our current tab to the corresponding project
        setCurrTab(project);
      }
    });
  };

  return (
    <AnimatedPage>
      <BackDropContainer>
        <BackAndTitle label="Projects" />
        <PageIcon iconName="folder" />
        <div className="tab-and-content-container">
          <PageTabMenu
            tabList={projects}
            onChangeSelectedTab={changeSelectedContent}
          />
          <AnimatedPage>
            <PageContent pageDetails={currTab} />
          </AnimatedPage>
        </div>
      </BackDropContainer>
    </AnimatedPage>
  );
}

export default Projects;
