import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.png";

export default function Header() {
  return (
    <Link to="/">
    <header id="header">
    <img src= {logo} className="logo" alt="logo" />
    <h2 id="tagline">Helping Startups Startup</h2>
    </header>
    </Link>
  );
}
