import "../../styles/Technology/TechButton.css";
/**
 * Tech button that is used to make up the tech button list
 * @param {*} props a given technology name is passed in EX:'Vue'
 * @returns Single tech button that is styled
 */
const TechButton = (props) => {
  return <div className={`tech-item ${props.techName}`}>{props.techName}</div>;
};

export default TechButton;
