import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { HamburgetMenuClose, HamburgetMenuOpen, ShoppingIcon } from "./Icons";
import logo from "../assests/images/logo.webp";

const NavBar = ({ cartItemCount }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);


  useEffect(() => {
   // Get the SVG container element
   const svgContainer = document.getElementById('svgContainer');
  
   if (svgContainer) {
   // Add a click event listener to the SVG container
   svgContainer.addEventListener('click', function() {
     // Toggle between two colors on each click
     const currentColor = this.querySelector('svg').getAttribute('fill');
     const newColor = currentColor === '#f5b921' ? '#f5b921' : '#f5b921';

     // Update the fill attribute of the SVG
     this.querySelector('svg').setAttribute('fill', newColor);
   });
  }
  });
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
      <img src={logo} alt="Logo" className="logo-image" style={{borderRadius: "20px"}}/>
          </NavLink>
          <NavLink
                exact
                to="/cart"
                activeClassName="active"
                className="nav-links"
                id="cartContainerMobile"
                onClick={handleClick}
                aria-label="shopping cart icon"
              >
              <ShoppingIcon id="shopping-icon" />
              {cartItemCount > 0 && <div className="cart-notification">{cartItemCount}</div>}
           
              </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
           
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                style={{ fontFamily: 'Graphik, Calibre-Regular, Segoe UI, Helvetica Neue, sans-serif' }}
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item" id="cartContainer">
              <NavLink
                exact
                to="/cart"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
              <ShoppingIcon id="shopping-icon"/>
              {cartItemCount > 0 && <div className="cart-notification">{cartItemCount}</div>}
           
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
