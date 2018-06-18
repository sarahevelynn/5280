import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Den1mc from "./assets/Den1mc.png";
import agribotix from "./assets/agribotix.png";
import cliexa from "./assets/cliexa.png";
import intelivideo from "./assets/intelivideo.png";
import mhws from "./assets/mhws.png";
import paws from "./assets/paws.png";
import uasCo from "./assets/uasCo.png";
import bt50 from "./assets/bt50.png";

export class Clients extends React.Component {
  render() {
    return (
      <div>
        <h1>Meet Some of Our Clients </h1>
        <div id="clientInfoMobile">
          <a href="http://www.cliexa.com/" target="_blank">
            <img src={cliexa} id="clientLogoTablet" alt="cliexa" />
          </a>
          <a href="http://www.pawsandreward.com/" target="_blank">
            <img src={paws} id="clientLogoTablet" alt="paws and reward" />
          </a>
        </div>
        <div id="clientInfoMobile">
          <a href="https://www.billtrack50.com/" target="_blank">
            <img src={bt50} id="clientLogoTablet" alt="BillTrack50" />
          </a>
          <a href="https://www.milehighworkshop.org/" target="_blank">
            <img src={mhws} id="clientLogoTablet" alt="Mile High Workshop" />
          </a>
          <a href="http://uascoalition.org/" target="_blank">
            <img src={uasCo} id="clientLogoTablet" alt="UAS Coalition" />
          </a>
        </div>
        <div id="clientInfoMobile">
          <a href="https://agribotix.com/" target="_blank">
            <img src={agribotix} id="clientLogoTablet" alt="Agribotix" />
          </a>
          <a href="https://www.1millioncups.com/" target="_blank">
            <img src={Den1mc} id="clientLogoTablet" alt="1 Million Cups Denver" />
          </a>
          <a href="https://www.intelivideo.com/" target="_blank">
            <img src={intelivideo} id="clientLogoTablet" alt="intelivideo" />
          </a>
        </div>
      </div>
    );
  }
}
