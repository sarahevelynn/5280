import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { About } from "./About.js";
import { Partners } from "./Partners.js";


export default class CompanyInfo extends React.Component {
  render() {
    return (
      <div>
        <About />
        <Partners />
      </div>
    );
  }
}
