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
          <a
            id="projectTitle"
            target="_blank"
            href={"https://intern-connect.firebaseapp.com/"}
          >
            <img
              id="projectIconTablet"
              src={internConnectLogo}
              alt="Intern Connect"
            />
            </a>
            <a
              id="projectTitle"
              target="_blank"
              href={"https://intern-connect.firebaseapp.com/"}
            >
              Intern Connect
            </a>
          </div>
          <div id="projectTile">
          <a
            id="projectTitle"
            target="_blank"
            href={"https://tracktivism.herokuapp.com/"}
          >
            <img
              id="projectIconTablet"
              src={tracktivismLogo}
              alt="Tracktivism"
            />
            </a>
            <a
              id="projectTitle"
              target="_blank"
              href={"https://tracktivism.herokuapp.com/"}
            >
              Tracktivism
            </a>
          </div>
          <div id="projectTile">
          <a
            id="projectTitle"
            target="_blank"
            href={"https://social-cloud-trends.firebaseapp.com/"}
          >
            <img
              id="projectIconTablet"
              src={socialCloudLogo}
              alt="Social Cloud"
            />
            </a>
            <a
              id="projectTitle"
              target="_blank"
              href={"https://social-cloud-trends.firebaseapp.com/"}
            >
              Social Cloud
            </a>
          </div>
          <div id="projectTile">
            <a
              id="projectTitle"
              target="_blank"
              href={"https://www.degrandisphysicaltherapy.com/"}
            >
              <img id="projectIconTablet" src={DPTLogo} alt="DPT" />
            </a>
            <a
              id="projectTitle"
              target="_blank"
              href={"https://www.degrandisphysicaltherapy.com/"}
            >
              DPT
            </a>
          </div>
        </div>

        <div id="webProjects">
          <div id="projectTile">
            <a
              id="projectTitle"
              target="_blank"
              href={"https://www.billtrack50.com/blog/"}
            >
              <img
                id="projectIconTablet"
                src={BillTrack50Logo}
                alt="BillTrack50"
              />
            </a>
            <a
              id="projectTitle"
              target="_blank"
              href={"https://www.billtrack50.com/blog/"}
            >
              BillTrack 50
            </a>
          </div>

          <div id="projectTile">
            <a
              id="projectTitle"
              target="_blank"
              href={"https://www.goldcalendar.com/"}
            >
              <img
                id="projectIconTablet"
                src={GoldCalLogo}
                alt="Gold Calendar"
              />
            </a>

            <a id="projectTitle" href={GC} download="Gold Calendar Collateral">
              Gold Calendar
            </a>
          </div>

          <div id="projectTile">
            <a
              id="projectTitle"
              target="_blank"
              href={"https://www.milehighworkshop.org/"}
            >
              <img id="projectIconTablet" src={MHWLogo} alt="MHW" />
            </a>
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
