import React, { useState } from "react";
import "../styles/Projects.css";
import { Link } from "react-router-dom";
import PageIcon from "./pageHelperComponents/PageIcon";
import PageTabMenu from "./pageHelperComponents/PageTabMenu";
import PageContent from "./pageHelperComponents/PageContent";
import BackDropContainer from "./UI/BackDropContainer";
import AnimatedPage from "./AnimatedPage";
/**
 * Project component which is the project page that lists all projects and their information.
 * @returns Project Page
 */
function Projects() {
  const [currTab, setCurrTab] = useState({});

  const linkStyle = {
    position: "relative",
    bottom: "25%",
    left: "1%",
    width: "100px",
    height: "fit-content",
    textDecoration: "none",
    padding: "10%",
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer",
    color: "white",
    fontWeight: "900",
    fontSize: "2rem",
  };

  const projects = [
    {
      title: "Keno Kozie",
      pic: "keno",
      desc: "internal company knowledge sharing database",
      technology: ["Vue", "Firebase", "Node", "HMTML/CSS"],
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
      <div className="arrow-title-container">
          <div className="arrow-back">
            <Link className="no-decoration" to="/">
              ←
            </Link>
          </div>

          <div className="page__title">Projects</div>
        </div>
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
