import React from "react";
import "./Header.css";
import Img from "../assets/header.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerMain">
      <Link to="/">
        <div className="headerImage">
          <img src={Img} />
        </div>
      </Link>
      <div className="headerLinks">
        <Link to="About">
        <p>ABOUT</p>
        </Link>
        <Link to="cusine">
          <p>CUISINE</p>
        </Link>
        <p>MENUS</p>
        <Link to="/Reservations">
          <p>RESERVATIONS</p>
        </Link>
        <Link to="Dining">
          <p>PRIVATE DINING</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
