import React from "react";
import { useState } from "react";

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
        {/* <i class="fa-solid fa-paw"></i>  */} PAWPALS
      </div>
      <div className={menuDisplay ? "navbar-menu" : "navbar-menu menu-display"}>
        <ul className="navbar-menu-list">
          <li className="navbar-menu-item">ADOPT</li>
          <li className="navbar-menu-item">STORIES</li>
          <li className="navbar-menu-item">DONATE</li>
          <li className="navbar-menu-item">CONTACT</li>
          <li className="navbar-menu-item">ABOUT</li>
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
