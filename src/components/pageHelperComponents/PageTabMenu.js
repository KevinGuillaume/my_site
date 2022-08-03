import "../../styles/PageTabMenu.css";
import PageTabMenuItem from "./PageTabMenuItem";

const PageTabMenu = (props) => {
  const allTabs = props.tabList;

  //Function to pass value upwards to whichever component calls it (AboutMe/Projects/etc)
  const getSelectedTab = (tab) => {
    props.onChangeSelectedTab(tab);
  }

  return (
    <div className="tabMenu">
      {allTabs.map((tab, index) => (
        <PageTabMenuItem key={index} name={tab.title} onGetSelectedTab={getSelectedTab}/>
      ))}
    </div>
  );
};

export default PageTabMenu;
