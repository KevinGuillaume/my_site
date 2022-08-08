import "../../styles/BackDropContainer.css";
import { useSelector } from "react-redux";
/**
 * This is a UI component which deals with the backdrop that all pages have
 * @param {*} props uses the props.children in order to allow components to be nested inside
 * @returns
 */
const BackDropContainer = (props) => {
  const isDark = useSelector((state) => state.displayThemeReducer);

  return <div className={isDark ? 'back-drop-container' : 'back-drop-container-light'}>{props.children}</div>;
};

export default BackDropContainer;
