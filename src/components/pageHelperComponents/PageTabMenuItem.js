import "../../styles/PageTabMenuItem.css";

const PageTabMenuItem = (props) => {
  
  //Function to pass selected tab upwards to PageTabMenu
  const onClickTab = () => {;
    props.onGetSelectedTab(props.name);
  }
  
  return (
    <div onClick={onClickTab} className="tabMenu__item">
      {props.name}
    </div>
  );
};

export default PageTabMenuItem;
