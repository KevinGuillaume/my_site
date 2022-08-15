import "../../styles/pageHelperStyles/PageContent.css";
import TechList from "../TechnologyComponents/TechList";
import { BiCodeBlock } from "react-icons/bi";
/**
 * This deals with what is rendered on each page depending on the selected tab
 * @param {*} props the pageDetails is passed in which holds the object and its specific page content title/pic/desc/technology
 * @returns the page content for a given tab
 */
const PageContent = (props) => {
  const content = props.pageDetails;
  const showPic = props.pageDetails.pic !== "";
  const isTechEmpty = content.technology;
  const projUrl = content.url !== '';

  return (
    <div className="selected-tab-content">
      <div className="title-box">
        <div className="tab-title">{content.title}</div>
        {projUrl || props.pageDetails.url == 'undefined' ? <a href={`${props.pageDetails.url}`} className="code-block">
          <BiCodeBlock />
        </a> : ''}
      </div>
      {showPic ? <div className={`${content.pic}-bg`}></div> : ""}
      <br />
      <div className="tab-description">{content.desc}</div>

      {showPic && isTechEmpty ? <TechList techList={content.technology} /> : ""}
    </div>
  );
};

export default PageContent;
