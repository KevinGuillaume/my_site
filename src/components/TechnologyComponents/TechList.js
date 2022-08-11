import "../../styles/Technology/TechList.css";
import TechButton from "./TechButton";
/**
 * Deals with the technologies used at the bottom of project page
 * @param {*} props the technology list is passed in
 * @returns the technology list component for the given object
 */
const TechList = (props) => {
  return (
    <div className="tech-list-container">
      {props.techList.map((tech, index) => (
        <TechButton key={index} techName={tech} />
      ))}
    </div>
  );
};

export default TechList;
