import "../../styles/PageContent.css";
import TechList from "../TechnologyComponents/TechList";

const PageContent = (props) =>{
    const content = props.pageDetails;
    const showPic = props.pageDetails.pic !== "";
    const isTechEmpty = content.technology;
    
    return <div className="selected-tab-content">
        {content.title}
        {showPic ? 
        <div className={`${content.pic}-bg`}></div>
        :""}
        <br />
        {content.desc}
        {showPic && isTechEmpty ? 
        <TechList techList={content.technology} />
        :""}
        
    </div>
}

export default PageContent;