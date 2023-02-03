import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuDisplay, setMenuDisplay] = useState(false);
  return (
    <div className="navbar">
      {/* <div className="navbar-social">
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-pinterest-p"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-reddit"></i>
      </div> */}
      <div className="navbar-logo">
        {/* <i class="fa-solid fa-paw"></i>  */} <Link to="/">PAWPALS</Link>
      </div>
      <div className={menuDisplay ? "navbar-menu" : "navbar-menu menu-display"}>
        <ul className="navbar-menu-list">
          <li className="navbar-menu-item">
            {" "}
            <Link to="/adopt">ADOPT</Link>
          </li>
          <li className="navbar-menu-item">
            {" "}
            <Link to="/stories">STORIES</Link>
          </li>
          <li className="navbar-menu-item">
            {" "}
            <Link to="/donate">DONATE</Link>
          </li>
          <li className="navbar-menu-item">
            {" "}
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="navbar-menu-item">
            {" "}
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>

        <button
          className="menu-cross"
          onClick={() => {
            setMenuDisplay(false);
          }}
        >
          ╳
        </button>
      </div>

      <button
        className="hamburger"
        onClick={() => {
          setMenuDisplay(true);
        }}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
    </div>
  );
}
