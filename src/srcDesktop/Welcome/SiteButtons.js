import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class SiteButtons extends React.Component {
  render() {
    return (
      <div id="squareSection">
        <div id="outterSquare">
          <h2 id="homeButton"> Welcome </h2>
          <p>
            In Colorado, we are fortunate to live on one of the most innovative
            stretches of highway in the nation: Denver to Boulder to Fort
            Collins. Consistently ranked in the top five cities for startups,
            our community is booming. Fulfilling all of the roles and tasks
            needed for success is challenging; meet 5280 Startup Solutions.
          </p>
          <Link to="/about">
            <div id="navagateButton">About Our Company</div>
          </Link>
        </div>
        <div id="innerSquare">
          <h2 id="homeButton"> Intern Connect </h2>
          <p>
            We want to help maximize your companys performance while giving
            motivated, bright students the access to experiential learning; meet
            Intern Connect.
            <br />
            <br />
            Colorado is home to the University of Denver, CU Boulder, CSU and
            Colorado College amongst others, saturated with potential and drive,
            ripe for the picking of startups.
          </p>
          <div id="internButtons">
            <div id="internButton"><a href="https://goo.gl/forms/pyujM8gRPhokvzBX2" target="_blank"> Apply for an Intern </a></div>
            <div id="internButton"><a href="https://goo.gl/forms/cHHF55lJbNlWhro23" target="_blank"> Apply for an Internship </a></div>
            </div>
        </div>
        <div id="outterSquare">
          <h2 id="homeButton"> Consulting </h2>
          <p>
            Throughout our years of startup consulting one thing has remained
            constant: "No, startup, you cannot do it all. Nor should you."
            <br />
            <br />
            Inquire with us about project or contract based consulting for
            whatever you simply do not have the resources for:
            <br />
            Web Development, App Development, Digital Marketing, Social Media,
            Advertising, Microfinance planning , Small Business Lending, User
            Experience, etc.
            <br />
            <br />
            We can help you get there.
          </p>

          <Link to="/services">
            <div id="navagateButton">Consulting</div>
          </Link>
        </div>
      </div>
    );
  }
}
