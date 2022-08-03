import "../../styles/TechButton.css";

const TechButton = (props) => {
  return <div className={`tech-item ${props.techName}`}>{props.techName}</div>;
};

export default TechButton;
