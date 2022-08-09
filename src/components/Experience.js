import "../styles/Experience.css";
import { Link } from "react-router-dom";
import PageIcon from "./pageHelperComponents/PageIcon";
import PageTabMenu from "./pageHelperComponents/PageTabMenu";
import PageContent from "./pageHelperComponents/PageContent";
import { useState } from "react";
import BackDropContainer from "./UI/BackDropContainer";
import AnimatedPage from "./AnimationComponents/AnimatedPage";

const Experience = () => {
  const [currTab, setCurrTab] = useState({});

  const experienceList = [
    {
      title: "RedMane",
      position: "Software Developer",
      desc: "Just started lol",
      technology: ["2022", "Present"],
    },
    {
      title: "HBR Consulting",
      position: "Web Developer Intern",
      desc: "As a web developer intern, I was responsible for creating an internal database for the company. The purpose was to allow those in the company to find others skilled in certain areas, or trained on specific clients. It was used for HR purposes as well in order to track employee growth through the addition of skills.",
      technology: ["2021", "2022"],
    },
    {
      title: "Blockchain@LUC",
      position: "Web Developer",
      desc: "I worked as a web developer of the club along with one other developer. I was part of the club executive teams and would cordinate events/meetings, and other club activities.",
      technology: ["2020", "2022"],
    },
  ];

  const changeSelectedContent = (selectedTab) => {
    experienceList.forEach((experience) => {
      if (experience.title === selectedTab) {
        //Set our current tab to the corresponding project
        setCurrTab(experience);
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

          <div className="page__title">Experience</div>
        </div>
        <PageIcon iconName="tools" />
        <div className="tab-and-content-container">
          <PageTabMenu
            tabList={experienceList}
            onChangeSelectedTab={changeSelectedContent}
          />
          <PageContent pageDetails={currTab} />
        </div>
      </BackDropContainer>
    </AnimatedPage>
  );
};

export default Experience;
