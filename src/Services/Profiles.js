import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import sarahEvelynn from "./assets/sarahEvelynn.png";
import lizzie from "./assets/lizzie.png";
import cam from "./assets/cam.png";
import jenna from "./assets/jenna.png";
import michael from "./assets/michael.png";
import osa from "./assets/osa.png";


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
            <h4> Expertise: Web & Mobile App Development, Digital Marketing, Social Media & Writing</h4>
            <h4> Rate: $65-85/hr depending on services rendered.</h4>
          </div>
          <div id="consultant">
            <img id="memberPhoto" src={osa} />
            <h2> Osa Aihie</h2>
            <h4> Years of Experience: 6</h4>
            <h4> Expertise: Content Writing</h4>
            <h4> Rate: <a target="_blank" href="https://kreateable.com/">See website for package pricing </a></h4>
          </div>
          <div id="consultant">
            <img id="memberPhoto" src={lizzie} />
            <h2> Lizzie Manning </h2>
            <h4> Years of Experience: 4</h4>
            <h4> Expertise: Copywriting, Content Creation, Strategic Integration</h4>
            <h4> Rate: $40/hr</h4>
          </div>
        </div>
        <div id="teamProfs">
          <div id="consultant">
            <img id="memberPhoto" src={jenna} />
            <h2> Jenna Rodger</h2>
            <h4> Years of Experience:  </h4>
            <h4> Expertise:  </h4>
            <h4> Rate:  </h4>
          </div>
          <div id="consultant">
            <img id="memberPhoto" src={michael} />
            <h2> Michael Moore</h2>
            <h4> Years of Experience:  </h4>
            <h4> Expertise:  </h4>
            <h4> Rate:  </h4>
          </div>
          <div id="consultant">
            <img id="memberPhoto" src={cam} />
            <h2> Cam Welch </h2>
            <h4> Years of Experience:  </h4>
            <h4> Expertise:  </h4>
            <h4> Rate:  </h4>
          </div>
        </div>
        <hr id="outsideLine"/>
        <hr id="insideLine"/>
        <hr id="outsideLine" />
      </div>
    );
  }
}
