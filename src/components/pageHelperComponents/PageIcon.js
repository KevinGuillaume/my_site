import "../../styles/PageIcon.css";
/**
 * The selected icon at the top for the given page
 * @params passed in props that will be the used for deciding the icon
 * @returns 
 */
const PageIcon = (props) => {
  return (
    <div className="selected-page-box">
      <div className={`Scaled-${props.iconName}`}></div>
    </div>
  );
};

export default PageIcon;
