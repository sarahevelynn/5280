import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import denverD from "../assets/denverD.jpg";

import { SiteButtons } from "./SiteButtons";
import { Projects } from "./Projects";


export default class Homepage extends React.Component {
  render() {
    return (
      <div>
        <img
          id="denver"
          src={denverD}
          className="denver-pic"
          alt="Downtown Denver"
        />
        <SiteButtons />
        <Projects />
      </div>
    );
  }
}
