import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {

    const logo = "https://user-images.githubusercontent.com/60150901/118402099-1a6a9e80-b686-11eb-92e4-1ed12c04f0b7.png"
    
    const [open, setOpen] = useState(false)
    const handleClick = () => setOpen(!open)
    
  return (
    <>
      <div id="nav-top-container" className="nav-top-container">
        <div className="general">
          <Link to="/Login">LOGIN</Link>

          <Link to="/Register">REGISTER</Link>
          <Link to="#">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart
          </Link>
          <Link to="/ContactUs">Contact us</Link>
          <Link to="#">Help</Link>
        </div>
      </div>
      <nav id="navbar" className="center">
        <div className="logo-section center">
           <Link to="/">
             <div className="nav-logo center">
                <img src={logo} alt="logo" width="70" />
                <h2>calisthenxs</h2>
             </div>
           </Link>
          <div className="hamburger-icon">
          <i class="fa fa-bars" aria-hidden="true" onClick={handleClick}></i>
          </div>
        </div>
        <div id="nav-items" className={open ?"nav-items responsive center" : "nav-items center"}>
          <ul id="list" className="list center">
            <Link to="/">
              <li className="list-item">Home</li>
            </Link>
            <Link to="#">
              <li className="list-item hover-dropdown">Program</li>
                <ul className="sub-list">
                  <li className="sub-list-item">Beginner Level</li>
                  <li className="sub-list-item">Intermediate Level</li>
                  <li className="sub-list-item">Advanced Level</li>
                  <li className="sub-list-item">Stretching & Mobility</li>
                  <li className="sub-list-item">Handstand Program</li>
                  <li className="sub-list-item">Nutrition Guide</li>
                  <li className="sub-list-item">Weighted Calisthenics</li>
                </ul>
            </Link>
            <Link to="#">
              <li className="list-item">SdCard</li>
            </Link>
            <Link to="/About">
              <li className="list-item">About</li>
            </Link>
            <Link to="/Shop">
              <li className="list-item">Shop</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}
