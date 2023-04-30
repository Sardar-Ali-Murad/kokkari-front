import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <div>
      <div className="footerMain">
        {/* The First Links  */}
        <div className="footerLinks">
          <Link to="Press">
            <p>PRESS ROOM</p>
          </Link>
          <Link to="CookBook">
          <p className="footerLinkAlignCenter">
            GIFT CERTIFICATES <br /> & COOKBOOK{" "}
          </p>
          </Link>
          <p>CONTACT</p>
        </div>
        {/* The First Links  */}

        {/* The Links */}
        <div className="footerSubLinksBigMain">
          <div className="footerSubLinks">
            <div className="footerLinks1">
              <p>KOKKARI </p>
              <p> | </p>
              <p>EVVIA</p>
            </div>
            <div className="footerSubLinksFlex">
              <p> KOKKARI ESTIATORIO</p>
              <p>200 Jackson Street (at Front St.)</p>
              <p>San Francisco, CA 94111</p>
              <p>p: 415.981.0983</p>
            </div>
            <div className="footerSubLinksFlex">
              <p>reservations & hours</p>
              <p>directions</p>
            </div>
          </div>
        </div>
        {/* The Links */}
      </div>
      {/* The Last Footer */}
      <div className="footerLast">
        <p>© 2015-2023 Kokkari </p>
        <p> Photos by Sara Remington | Site by TenayaPartners </p>
      </div>
      {/* The Last Footer */}
    </div>
  );
};

export default Footer;
