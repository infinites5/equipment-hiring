import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>EquRent</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; VijayAnand.M</p>
      </div>
    </footer>
  );
};

export default Footer;
