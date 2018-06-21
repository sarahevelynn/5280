import React from "react";
import email from "./assets/email.png";
import twitter from "./assets/twitter.png";
import facebook from "./assets/facebook.png";

export default function Footer() {
  return (
    <footer>
      <p id="copy">&copy; 2018, 5280 Startup Solutions, LLC</p>
      <div id="social">
        <a href={"mailto:sarah@5280startupsolutions.co"} target="_blank">
          <img src={email} className="socialPhoto" alt="email us" />
        </a>
        <a href={"https://twitter.com/5280startup"} target="_blank">
          <img src={twitter} className="socialPhoto" alt="twitter" />
        </a>
        <a
          href={"https://www.facebook.com/5280StartupSolutions/"}
          target="_blank"
        >
          <img src={facebook} className="socialPhoto" alt="facebook" />
        </a>
      </div>
    </footer>
  );
}
