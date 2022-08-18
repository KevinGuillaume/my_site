import "../../styles/pageHelperStyles/LinkIcons.css";
import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";

const LinkIcons = () => {
  return (
    <div className="link-box">
      <div className="link-box__item">
        <a className="link-box__link" href="https://github.com/KevinGuillaume">
          <AiOutlineGithub />
        </a>
      </div>

      <div className="link-box__item">
        <a className="link-box__link" href="mailto:kevin24future@icloud.com">
          <AiOutlineMail />
        </a>
      </div>
      <div className="link-box__item">
        <a
          className="link-box__link"
          href="https://mobile.twitter.com/keving11_"
        >
          <AiOutlineTwitter />
        </a>
      </div>
    </div>
  );
};

export default LinkIcons;
