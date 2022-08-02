import "../../styles/PageTabMenu.css";
import PageTabMenuItem from "./PageTabMenuItem";

const PageTabMenu = (props) => {
  const allTabs = props.tabList;

  return (
    <div className="tabMenu">
      {allTabs.map((tab, index) => (
        <PageTabMenuItem key={index} name={tab} />
      ))}
    </div>
  );
};

export default PageTabMenu;
