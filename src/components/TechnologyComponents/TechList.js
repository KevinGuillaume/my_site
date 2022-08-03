import "../../styles/TechList.css";
import TechButton from "./TechButton";

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
