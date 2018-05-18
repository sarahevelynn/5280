import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class About extends React.Component {
  render() {
    return (
      <div>
        <h1> About Us. </h1>
        <div id="navagationButtons">
          <div id="welcome">
            <h2> The Reason </h2>
            <p>
              An immense untapped resource exists in the Denver metropolitan
              area along with Boulder, Fort Collins and Colorado Springs:
              motivated, engaged students and young professionals with a thirst
              for learning and experience.
              <br />
              <br />
              Meanwhile, the startup cohorts need qualified labor in numerous
              areas, preferably at below-market cost.
            </p>
            <p>
              We strive to help business owners develop a solid foundation and
              business strategy so they can be successful.
              <br />
              <br />
              We work in many different areas of your business to improve
              productivity, organization, company culture and employee
              relations.
            </p>
          </div>
          <div id="internButton">
            <h2> The Goal </h2>
            <p>
              We strive to improve business performance and provide opportunity
              for students and young professionals to work in the startup world.
              <br />
              <br />
              Finding and hiring dependable employees or contractors can be
              exhausting.
              <br />
              We provide qualified consultants to help you with any projects you
              do not have the expereince or time to do yourself.
              <br />
              Need an intern? We simplify the search process to get you people
              who can thrive in the fast pace startup environment.
            </p>
          </div>
          <div id="consultingButton">
            <h2> The Solution </h2>
            <p>
              Running a business is not easy. With 5280 Startup Solutions, you
              will learn solutions to common startup challenges so you can focus
              on what is important - the idea implementation!
              <br />
              <br />
              Whether you need us for contract work or intern placement, we are
              the answer for getting what you need done when you need it done.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
