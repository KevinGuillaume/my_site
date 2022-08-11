import "../../styles/PageTabMenu.css";
import PageTabMenuItem from "./PageTabMenuItem";
/**
 * This is the tab menu that has all the menu items a user selects
 * @param {*} props passed in is the amount of tabs that should be on a page 
 * @returns the tab menu that holds each individual tab menu item
 */
const PageTabMenu = (props) => {
  
  const allTabs = props.tabList;

  //Function to pass value upwards to whichever component calls it (AboutMe/Projects/etc)
  const getSelectedTab = (tab) => {
    props.onChangeSelectedTab(tab);
  }

  return (
    <div className='tabMenu'>
      {allTabs.map((tab, index) => (
        <PageTabMenuItem key={index} name={tab.title} onGetSelectedTab={getSelectedTab}/>
      ))}
    </div>
  );
};

export default PageTabMenu;
