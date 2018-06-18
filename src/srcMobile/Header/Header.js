import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.png";

export default function Header() {
  return (
    <header id="header">
      <div>
        <Link to="/">
          <img src={logo} className="mobileLogo" alt="logo" />
        </Link>
      </div>
      <div>
        <nav id="navBarMobile">
          <Link to="/about">
            <h2 id="navItemMobile">About</h2>
          </Link>
          <Link to="/services">
            <h2 id="navItemMobile">Services</h2>
          </Link>
          <a href={"mailto:sarah@5280startupsolutions.co"}><h2 id="navItemMobile">Contact Us </h2></a>
        </nav>
      </div>
    </header>
  );
}
