import React, { useState } from "react";
import "../styles/Projects.css";
import PageIcon from "./pageHelperComponents/PageIcon";
import PageTabMenu from "./pageHelperComponents/PageTabMenu";
import PageContent from "./pageHelperComponents/PageContent";
/**
 * Project component which is the project page that lists all projects and their information.
 * @returns Project Page
 */
function Projects() {
  const [currTab, setCurrTab] = useState({});

  const projects = [
    {
      title: "Keno Kozie",
      pic: "keno",
      desc: "internal company knowledge sharing database",
      technology: ["Vue", "Firebase","Node",  "HMTML/CSS"],
    },
    {
      title: "Fantasy Markets",
      pic: "fantasy",
      desc: "Stock trading simulator game",
      technology: ["React", "Firebase", "HMTML/CSS", "Redux"],
    },
    {
      title: "Blockchain@LUC",
      pic: "blockchain",
      desc: "Club website for the blockchain club at Loyola University Chicago",
      technology: ["React", "HMTML/CSS", "API"],
    },
  ];
  /* Object would have title: , pic: , desc: , tech: ,*/

  const changeSelectedContent = (selectedTab) => {
    projects.forEach((project) => {
      if (project.title === selectedTab) {
        //Set our current tab to the corresponding project
        setCurrTab(project);
      }
    });
  };

  return (
    <div className="back-drop-container">
      <PageIcon iconName="folder" />
      <PageTabMenu
        tabList={projects}
        onChangeSelectedTab={changeSelectedContent}
      />

      <PageContent pageDetails={currTab} />
    </div>
  );
}

export default Projects;
