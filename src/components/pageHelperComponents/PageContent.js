import "../../styles/PageContent.css";
import TechList from "../TechnologyComponents/TechList";
import AnimatedPage from "../AnimatedPage";
/**
 * This deals with what is rendered on each page depending on the selected tab
 * @param {*} props the pageDetails is passed in which holds the object and its specific page content title/pic/desc/technology
 * @returns the page content for a given tab
 */
const PageContent = (props) => {
  const content = props.pageDetails;
  const showPic = props.pageDetails.pic !== "";
  const isTechEmpty = content.technology;

  return (
    <div className="selected-tab-content">
      <div className="tab-title">{content.title}</div>

      {showPic ? <div className={`${content.pic}-bg`}></div> : ""}
      <br />
      <div className="tab-description">{content.desc}</div>

      {showPic && isTechEmpty ? <TechList techList={content.technology} /> : ""}
    </div>
  );
};

export default PageContent;
