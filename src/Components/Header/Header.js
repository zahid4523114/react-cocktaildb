import React from "react";
import "./Header.css";
import logo from "../../logo.png";

const Header = () => {
  return (
    <nav className="d-flex justify-content-between align-items-center p-4 mb-4">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="list-container">
        <ul className="list-unstyled d-flex ">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Product info</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
