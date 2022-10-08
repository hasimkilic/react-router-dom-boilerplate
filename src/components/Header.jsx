import React from "react";
import { Link } from "react-router-dom";
function Header() {
  const url = "https://ionicframework.com/docs/icons/logo-react-icon.png"
  return (
    <div>
      <nav className="flex">
        <div className="logo">
          <a href="/">
            <img src={url} style={{height:'6vh'}} alt="logo" />
          </a>
        </div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/services">Services</Link>
      </nav>
    </div>
  );
}

export default Header;
