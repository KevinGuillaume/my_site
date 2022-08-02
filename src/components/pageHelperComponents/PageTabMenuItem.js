import "../../styles/PageTabMenuItem.css";

const PageTabMenuItem = (props) => {
  return (
    <div className="tabMenu__item">
      {props.name}
    </div>
  );
};

export default PageTabMenuItem;
