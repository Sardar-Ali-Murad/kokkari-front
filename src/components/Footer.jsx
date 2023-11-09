import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
// or

const Footer = ({ setActive }) => {
  function newTab(link){
    window.open(link,"_blank")
  }
  return (
    <div>
      <ScrollToTop smooth />
      <div className="footerMain">
        {/* The First Links  */}
        <div className="footerLinks">
          <Link to="Press">
            <p className="activeLink" onClick={() => setActive("")}>
              PRESS ROOM
            </p>
          </Link>
          <Link to="CookBook">
            <p
              className="footerLinkAlignCenter activeLink"
              onClick={() => setActive("")}
            >
              GIFT CERTIFICATES <br /> & COOKBOOK{" "}
            </p>
          </Link>
          <Link to="/Contact">
            <p className="activeLink">CONTACT</p>
          </Link>
        </div>
        {/* The First Links  */}

        {/* The Links */}
        <div className="footerSubLinksBigMain">
          <div className="footerSubLinks">
            <div className="footerLinks1">
              <Link to="/">
                <p className="activeLink" onClick={() => setActive("")}>
                  KOKKARI{" "}
                </p>
              </Link>
              <p> | </p>
              <Link to="/">
                <p className="activeLink" onClick={() => setActive("")}>
                  EVVIA
                </p>
              </Link>
            </div>
            <div className="footerSubLinksFlex">
              <p> KOKKARI ESTIATORIO</p>
              <p>200 Jackson Street (at Front St.)</p>
              <p>San Francisco, CA 94111</p>
              <p>
                p: <span className="activeLink">415.981.0983</span>
              </p>
            </div>
            <div className="footerSubLinksFlex">
              <Link to="/Book">
                <p className="activeLink" onClick={() => setActive("")}>
                  {/* reservations & hours */}
                  Book A Table
                </p>
              </Link>
              <Link to="/Reservations">
                <p className="activeLink" onClick={() => setActive("")}>
                  directions
                </p>
              </Link>
            </div>
          </div>
        </div>
        {/* The Links */}
      </div>
      {/* The Last Footer */}
      <div className="footerLast">
        <p>© 2023- Merry Smith </p>
        <p>
          Photos by Merry Smith | Site by <span className="footerLink" onClick={()=>newTab("https://web.facebook.com/sardar.ali.muradd")}>Sardar Ali Murad </span>
        </p>
      </div>
      {/* The Last Footer */}
    </div>
  );
};

export default Footer;
