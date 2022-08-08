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
      desc: "Worked here",
      technology: ["2022", "Present"],
    },
    {
      title: "HBR Consulting",
      position: "Web Developer Intern",
      desc: "Worked here",
      technology: ["2021", "2022"],
    },
    {
      title: "Blockchain@LUC",
      position: "Web Developer",
      desc: "Worked here",
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
