import React from "react";
import { useNavigate } from "react-router-dom";
import "../Footer/Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <p
        onClick={() => {
          navigate("/about-us");
        }}>
        О Нас !
      </p>
    </div>
  );
};

export default Footer;
