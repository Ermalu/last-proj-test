import React from "react";
import { useNavigate } from "react-router-dom";
import "../Footer/Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <h5
        onClick={() => {
          navigate("/about-us");
        }}>
        О Нас !
      </h5>

      <h5
        onClick={() => {
          navigate("/contacts");
        }}>
        Контакты
      </h5>
      <div className="link">
        <a href="https://www.instagram.com/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png"
            width={"30px"}
          />
        </a>
        <a href="https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/292px-Twitter-logo.svg.png"
            width={"30px"}
          />
        </a>
        <a href="https://www.youtube.com/">
          <img
            src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png"
            width={"30px"}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
