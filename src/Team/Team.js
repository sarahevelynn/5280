import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import sarahEvelynn from "./assets/sarahEvelynn.png";


export default class Team extends React.Component {
  render() {
    return (
      <div>
      <h1>Meet Our Team </h1>
      <div id="teamProfs">
      <div id="member">
      <img src={sarahEvelynn} />
      <h2> </h2>
      <h4> </h4>
      </div>
      <div id="member">
      <img src={} />
      <h2> </h2>
      <h4> </h4>
      </div>
      <div id="member">
      <img src={} />
      <h2> </h2>
      <h4> </h4>
      </div>
      </div>

      </div>
    );
  }
}
