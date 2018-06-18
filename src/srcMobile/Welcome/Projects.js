import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import denverD from "./assets/denverD.jpg";
import internConnectLogo from "./assets/internConnectLogo.png";
import tracktivismLogo from "./assets/tracktivismLogo.png";
import socialCloudLogo from "./assets/socialCloudLogo.png";
import DPTLogo from "./assets/DPTLogo.png";
import BillTrack50Logo from "./assets/BillTrack50Logo.png";
import GoldCalLogo from "./assets/GoldCalLogo.png";
import GC from "./assets/GC.pdf";
import MHWLogo from "./assets/MHWLogo.png";
import MHWAnnualReport from "./assets/MHWAnnualReport.pdf";

export class Projects extends React.Component {
  render() {
    return (
      <div id="projects">
        <h1> See Some of Our Work </h1>

        <div id="webProjects">
          <div id="projectTile">
            <img
              id="projectIconMobile"
              src={internConnectLogo}
              alt="Intern Connect"
            />
            <a
              id="projectTitle"
              target="_blank"
              href={"https://intern-connect.firebaseapp.com/"}
            >
              Intern Connect
            </a>
          </div>

          <div id="projectTile">
            <img id="projectIconMobile" src={tracktivismLogo} alt="Tracktivism" />
            <a
              id="projectTitle"
              target="_blank"
              href={"https://tracktivism.herokuapp.com/"}
            >
              Tracktivism
            </a>
          </div>
          </div>

          <div id="webProjects">
          <div id="projectTile">
            <img id="projectIconMobile" src={socialCloudLogo} alt="Intern Connect" />
            <a
              id="projectTitle"
              target="_blank"
              href={"https://intern-connect.firebaseapp.com/"}
            >
              Social Cloud
            </a>
          </div>
          <div id="projectTile">
            <img id="projectIconMobile" src={DPTLogo} alt="Intern Connect" />
            <a
              id="projectTitle"
              target="_blank"
              href={"https://intern-connect.firebaseapp.com/"}
            >
              DPT
            </a>
          </div>
        </div>

        <div id="webProjects">
          <div id="projectTile">
            <img id="projectIconMobile" src={BillTrack50Logo} alt="Intern Connect" />
            <a
              id="projectTitle"
              target="_blank"
              href={"https://www.billtrack50.com/blog/"}
            >
              BillTrack 50
            </a>
          </div>

          <div id="projectTile">
            <img
              id="projectIconMobile"
              src={GoldCalLogo}
              alt="Intern Connect"
            />
            <a id="projectTitle" href={GC} download="Gold Calendar Collateral">
              Gold Calendar
            </a>
          </div>
          </div>

          <div id="webProjects">
          <div id="projectTile">
            <img id="projectIconMobile" src={MHWLogo} alt="Intern Connect" />
            <a
              id="projectTitle"
              href={MHWAnnualReport}
              download="MHW Annual Report"
            >
              Mile High Workshop
            </a>
          </div>
        </div>
      </div>
    );
  }
}
