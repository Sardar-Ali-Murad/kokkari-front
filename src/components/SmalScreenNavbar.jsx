import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./SmallScreenNavbar.css";
import LunchList from "../assets/lunch.pdf";
import DinnerList from "../assets/dinner.pdf";
import WineList from "../assets/wine.pdf";
import Img from "../assets/header.png";


const SmalScreenNavbar = () => {
  let [ham, setHam] = React.useState(true);

  function lunch() {
    const linkSource = LunchList;
    const downloadLink = document.createElement("a");
    downloadLink.href = linkSource;
    downloadLink.download = "lunch.pdf";
    downloadLink.click();
  }

  function dinner() {
    const linkSource = DinnerList;
    const downloadLink = document.createElement("a");
    downloadLink.href = linkSource;
    downloadLink.download = "dinner.pdf";
    downloadLink.click();
  }

  function wine() {
    const linkSource = WineList;
    const downloadLink = document.createElement("a");
    downloadLink.href = linkSource;
    downloadLink.download = "wine.pdf";
    downloadLink.click();
  }
  return (
    <div className="nav bigScreenNavWriter darkNav">
      <div className="nav-main" id="nav-main-writer">
        <div className="nav-front"></div>
        {/* <img src={Img} style={{height:"100px",width:"100px"}}/> */}


        <div className="navBtnsBigScreen"></div>

        <GiHamburgerMenu
          className="ham hamWriter"
          style={{ color: "#f1f1f1" }}
          onClick={() => setHam(false)}
        />
      </div>

      <div
        className={`smal-screen-nav ${!ham ? "small-screen-nav-active" : ""}`}
      >
        <AiOutlineClose
          onClick={() => setHam(true)}
          className="small-screen-close"
        />
        <nav>
          <ul>
            <li>
              <Link
                className=""
                to="/"
                onClick={() => setHam(true)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                onClick={() => setHam(true)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/cusine"
                onClick={() => setHam(true)}
              >
                Cousine
              </Link>
            </li>
            <li>
              {/* <Link
                to="/courses"
                onClick={() => setHam(true)}
              > */}
              <a>
                Menu
              </a>
              {/* </Link> */}
              <div className="smallScreenNavMenus">
                <p className="lunchSmall" onClick={lunch}>Lunch Menu</p>
                <p className="dinnerSmall" onClick={dinner}>Dinner Menu</p>
                <p className="wineSmall" onClick={wine}>Wine List</p>
              </div>
            </li>
            <li>
              <Link
                to="/Reservations"
                onClick={() => setHam(true)}
              >
                Reservation
              </Link>
            </li>
            <li>
              <Link
                to="/Dining"
                onClick={() => setHam(true)}
              >
                Private Dining
              </Link>
            </li>
          </ul>
        </nav>
        <div className="navBtnsSmallScreen navBtnsSmallScreenWriter"></div>
      </div>
    </div>
  );
};

export default SmalScreenNavbar;
