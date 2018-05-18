import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class About extends React.Component {
  render() {
    return (
      <div>
        <h1> About Us. </h1>

        <div id="info1">
          <div id="segment">
            <h2> Our Reason </h2>
            <p>
              An immense untapped resource exists in the Denver metropolitan
              area along with Boulder, Fort Collins and Colorado Springs:
              motivated, engaged students and young graduates with a thirst for
              learning and experience. Meanwhile, the startup cohorts need
              qualified labor in numerous areas, preferably at below-market
              cost.
            </p>
          </div>
          <div id="segment">
            <h2> Our Vision</h2>
            <p>
              We strive to help business owners develop a solid foundation and
              business strategy so they can be successful.
              <br />
              <br />
              We work in areas of your business to improve productivity,
              organization, company culture, and employee relations.
              <br />
              <br />
              Find out how we can help you and your business today!
            </p>
          </div>
        </div>

        <h1> Our Strength </h1>
        <div id="info2">
          <div id="segment">
            <h4> Our Goal </h4>
            <p>
              Our goal is to improve business performance and provide
              opportunity for students to work in the startup world.
            </p>
          </div>
          <div id="segment">
            <h4> Business Solutions </h4>
            <p>
              Running a business is not easy. With 5280 Startup Solutions, you
              will learn solutions to common startup challenges so you can focus
              on what is important - the idea implementation!{" "}
            </p>
          </div>
        </div>

        <div id="info2">
          <div id="segment">
            <h4> Hire Us </h4>
            <p>
              Whether you need us for contract work or intern placement, we are
              the answer for getting what you need done when you need it done.{" "}
            </p>
          </div>
          <div id="segment">
            <h4> Find Talent </h4>
            <p>
              Finding and hiring dependable employees can be exhausting. We
              simplify your search process to get you people and skills you need
              who can make it in the fast pace startup environment.
            </p>
          </div>
        </div>

        <div id="info4" />
      </div>
    );
  }
}
