import React from "react";
import "./Footer.scss";
import { logo } from "../../constants/images";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const handleBackToTop = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };
  return (
    <footer>
      <div className="footer__full-width-btn" onClick={handleBackToTop}>
        Back to top
      </div>
      <div className="footer__section">
        <div>
          <img
            className="navbar__logo"
            src={logo}
            alt="logo"
            onClick={() => navigate("/")}
          />
        </div>
      </div>
      <div className="footer__section2">
        <span>© 2022, pouyadh.ir, Pouya Dehghani.</span>
      </div>
    </footer>
  );
};

export default Footer;
