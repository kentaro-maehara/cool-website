import React, { useState } from "react";
import "../../../swatch/bootstrap.css";

const Navbar = () => {
  const [toggleState, setToggleState] = useState(false);

  const toggleStateChange = () => {
    setToggleState(!toggleState);
  };

  const toggleOnOff = toggleState ? "dropdown open" : "dropdown";

  return (
    <div className="navbar navbar-fixed-top">
      <div className="navbar-inner">
        <div className="container">
          <a className="btn btn-navbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </a>
          <a className="brand" href="#">
            Kentaro Maehara's homepage
          </a>
          <div className="nav-collapse">
            <ul className="nav" id="main-menu-left">
              <li className={toggleOnOff}>
                <a
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  onClick={toggleStateChange}
                >
                  Sites
                  <b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a target="_blank" href="https://kentaro-maehara.com/">
                      Kentaro photos
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Link</a>
              </li>
              <li>
                <a href="#">Bio</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
