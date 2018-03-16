import React, { Component } from "react";
import AbakusLogo from "src/components/AbakusLogo/AbakusLogo";
import "./LandingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <div className="container flex-center">
        <div className="flex-center">
          <AbakusLogo />
          <h1>Landing Page</h1>
        </div>
      </div>
    );
  }
}

export default LandingPage;
