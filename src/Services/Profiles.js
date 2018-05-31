import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import sarahEvelynn from "./assets/sarahEvelynn.png";
import lizzie from "./assets/lizzie.png";
import cam from "./assets/cam.png";
import jenna from "./assets/jenna.png";
import michael from "./assets/michael.png";
import osa from "./assets/osa.png";
import email from "./assets/email.png";

export class Profiles extends React.Component {
  render() {
    return (
      <div>
        <h1>Meet Our Consultants </h1>
        <div id="teamProfs">
          <div id="consultant">
            <img id="memberPhoto" src={sarahEvelynn} />
            <h2> SarahEvelynn Johnson</h2>
            <h4> Years of Experience: 6</h4>
            <h4>
              {" "}
              Expertise: Web & Mobile App Development, Digital Marketing, Social
              Media & Writing
            </h4>
            <h4> Rate: $65-85/hr depending on services rendered.</h4>
              <a href={"mailto:sarah@5280startupsolutions.co"} target="_blank">
                <img src={email} id="contactPhoto" alt="email " />
              </a>
          </div>
          <div id="consultant">
            <img id="memberPhoto" src={osa} />
            <h2> Osa Aihie</h2>
            <h4> Years of Experience: 6</h4>
            <h4> Expertise: Content Writing</h4>
            <h4>
              {" "}
              Rate:{" "}
              <a target="_blank" href="https://kreateable.com/">
                See website for package pricing{" "}
              </a>
            </h4>
            <a href={"mailto:sarah@5280startupsolutions.co"} target="_blank">
              <img src={email} id="contactPhoto" alt="email " />
            </a>
          </div>
          <div id="consultant">
            <img id="memberPhoto" src={michael} />
            <h2> Michael Moore</h2>
            <h4> Years of Experience: 5</h4>
            <h4>
              {" "}
              Expertise: Marketing Strategy, Brand Strategy, Social Media
              Strategy, Customer Experience Design
            </h4>
            <h4> Rate: $50/hr</h4>
            <a href={"mailto:MichaelTMoore94@gmail.com"} target="_blank">
              <img src={email} id="contactPhoto" alt="email " />
            </a>
          </div>
        </div>

        <div id="teamProfs">
          <div id="consultant">
            <img id="memberPhoto" src={jenna} />
            <h2> Jenna Rodger</h2>
            <h4> Years of Experience: 2</h4>
            <h4> Expertise: Direct Sales & Creative Marketing</h4>
            <h4> Rate: $40/hr</h4>
            <div>
            <a href={"mailto:sarah@5280startupsolutions.co"} target="_blank">
              <img src={email} id="contactPhoto" alt="email " />
            </a>
            </div>

          </div>
          <div id="consultant">
            <img id="memberPhoto" src={cam} />
            <h2> Cam Welch </h2>
            <h4> Years of Experience: 8</h4>
            <h4> Expertise: Photography, Photoshop, Branding, Social Media Marketing</h4>
            <h4> Rate: $150/hr</h4>
            <a href={"mailto:Camwelchphotography@gmail.com"} target="_blank">
              <img src={email} id="contactPhoto" alt="email " />
            </a>
          </div>
          <div id="consultant">
            <img id="memberPhoto" src={lizzie} />
            <h2> Lizzie Manning </h2>
            <h4> Years of Experience: 4</h4>
            <h4>
              {" "}
              Expertise: Copywriting, Content Creation, Strategic Integration
            </h4>
            <h4> Rate: $40/hr</h4>
            <a href={"mailto:Manninglizzle@gmail.com"} target="_blank">
              <img src={email} id="contactPhoto" alt="email " />
            </a>

          </div>
        </div>
        <hr id="outsideLine" />
        <hr id="insideLine" />
        <hr id="outsideLine" />
      </div>
    );
  }
}
