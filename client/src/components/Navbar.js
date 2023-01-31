import React from "react";

export default function Navbar() {
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
      <div className="navbar-menu">
        <ul className="navbar-menu-list">
          <li className="navbar-menu-item">EXPLORE</li>
          <li className="navbar-menu-item">ADOPT</li>
          <li className="navbar-menu-item">REHOME</li>
          <li className="navbar-menu-item">DONATE</li>
          <li className="navbar-menu-item">ABOUT</li>
        </ul>
      </div>
    </div>
  );
}
