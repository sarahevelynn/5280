import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.png";

export default function Header() {
  return (
    <header id="header">
      <div>
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
      </div>
      <div id="navBar">
        <h2 id="tagline">Helping Startups Startup</h2>
        <nav>
          <Link to="/">
            <h2 id="navItem">Home</h2>
          </Link>
          <h2>::</h2>
          <Link to="/about">
            <h2 id="navItem">About Us </h2>
          </Link>
          <h2>::</h2>
          <Link to="/services">
            <h2 id="navItem">Our Services </h2>
          </Link>
          <h2>::</h2>
          <a href={"mailto:sarah@5280startupsolutions.co"}><h2 id="navItem">Contact Us </h2></a>
        </nav>
      </div>
    </header>
  );
}
