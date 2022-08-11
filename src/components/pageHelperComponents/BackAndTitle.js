import "../../styles/pageHelperStyles/BackAndTitle.css";
import { Link } from "react-router-dom";
import { dontDisplayParticles } from "../../actions";
import { useDispatch } from "react-redux";

const BackAndTitle = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="arrow-title-container">
      <div className="arrow-back">
        <Link
          onClick={() => dispatch(dontDisplayParticles())}
          className="no-decoration"
          to="/"
        >
          ←
        </Link>
      </div>

      <div className="page__title">{props.label}</div>
    </div>
  );
};

export default BackAndTitle;
