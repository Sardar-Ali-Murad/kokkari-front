import React from "react";
import "./Header.css";
import Img from "../assets/header.png";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LunchList from "../assets/lunch.pdf";
import DinnerList from "../assets/dinner.pdf";
import WineList from "../assets/wine.pdf";
import SmallScreenNavbar from "./SmalScreenNavbar";

const Header = ({active,setActive}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    // setActive("Menu");
  };

  function lunch() {
    setAnchorEl(null);
    const linkSource = LunchList;
    const downloadLink = document.createElement("a");
    downloadLink.href = linkSource;
    downloadLink.download = "lunch.pdf";
    downloadLink.click();
  }

  function dinner() {
    setAnchorEl(null);
    const linkSource = DinnerList;
    const downloadLink = document.createElement("a");
    downloadLink.href = linkSource;
    downloadLink.download = "dinner.pdf";
    downloadLink.click();
  }

  function wine() {
    setAnchorEl(null);
    const linkSource = WineList;
    const downloadLink = document.createElement("a");
    downloadLink.href = linkSource;
    downloadLink.download = "wine.pdf";
    downloadLink.click();
  }
  return (
    <div className="headerBigMain">
      <div className="headerMain BigScreenHeader">
        <Link to="/">
          <div className="headerImage">
            <img src={Img} />
          </div>
        </Link>
        <div className="headerLinksWrapper">
          <div className="headerLinks">
            <Link to="About">
              <p
                onClick={() => setActive("About")}
                style={{ color: active === "About" ? "#FFDEAD" : "" }}
              >
                ABOUT
              </p>
            </Link>
            <Link to="cusine">
              <p
                onClick={() => setActive("Cusine")}
                style={{ color: active === "Cusine" ? "#FFDEAD" : "" }}
              >
                CUISINE
              </p>
            </Link>

            <div>
              <p
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                // style={{ color: active === "Menu" ? "#FFDEAD" : "" }}
              >
                Menu
              </p>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                style={{ marginTop: "30px" }}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={lunch}>Lunch Menu</MenuItem>
                <MenuItem onClick={dinner}>Dinner Menu</MenuItem>
                <MenuItem onClick={wine}>Wine List</MenuItem>
              </Menu>
            </div>

            <Link to="/Reservations">
              <p
                onClick={() => setActive("Reservation")}
                style={{ color: active === "Reservation" ? "#FFDEAD" : "" }}
              >
                RESERVATIONS
              </p>
            </Link>
            <Link to="Dining">
              <p
                onClick={() => setActive("Dining")}
                style={{ color: active === "Dining" ? "#FFDEAD" : "" }}
              >
                PRIVATE DINING
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="smallScreenHeader">
        <SmallScreenNavbar />
      </div>
    </div>
  );
};

export default Header;
