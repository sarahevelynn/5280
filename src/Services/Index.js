import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Profiles } from "./Profiles.js";


export default class Consulting extends React.Component {
  render() {
    return (
      <div>
        <Profiles />
      </div>
    );
  }
}
