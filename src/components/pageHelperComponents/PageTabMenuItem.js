import "../../styles/pageHelperStyles/PageTabMenuItem.css";
/**
 * This makes up a tab menu - tab menu contains tab menu items
 * @param {*} props a single tab name is passed in so it knows what to render
 * @returns a single tab component
 */
const PageTabMenuItem = (props) => {
  //Function to pass selected tab upwards to PageTabMenu
  const onClickTab = () => {
    props.onGetSelectedTab(props.name);
  };

  return (
    <div onClick={onClickTab} className="tabMenu__item">
      {props.name}
    </div>
  );
};

export default PageTabMenuItem;
