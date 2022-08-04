import "../../styles/PageIcon.css";
import { useSelector } from "react-redux";
/**
 * The selected icon at the top for the given page
 * @params passed in props that will be the used for deciding the icon
 * @returns 
 */
const PageIcon = (props) => {

  const isDark = useSelector(state => state.displayThemeReducer);

  return (
    <div className={isDark ? "selected-page-box" : "selected-page-box-light"}>
      <div className={`Scaled-${props.iconName}`}></div>
    </div>
  );
};

export default PageIcon;
