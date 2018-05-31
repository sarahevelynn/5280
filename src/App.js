import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import Homepage from "./Welcome/Index.js"
import CompanyInfo from "./Team/Index.js";
import Consulting from "./Services/Index.js";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App-content">
            <Header />
            <Route exact path="/" component={Homepage} />
            <Route exact path="/about" component={CompanyInfo} />
            <Route exact path="/services" component={Consulting} />
            <Footer />
          </div>
      </Router>
      </div>

    );
  }
}

export default App;
