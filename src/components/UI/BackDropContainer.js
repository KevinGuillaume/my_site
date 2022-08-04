import "../../styles/BackDropContainer.css";
/**
 * This is a UI component which deals with the backdrop that all pages have
 * @param {*} props uses the props.children in order to allow components to be nested inside
 * @returns
 */
const BackDropContainer = (props) => {
  return(
  <div className="back-drop-container">{props.children}</div>
  )
};

export default BackDropContainer;
