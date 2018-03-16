import React, { Component } from "react";
import Img from "react-image";
import logo from "public/logo-dark.png";
import "./AbakusLogo.css";

class AbakusLogo extends Component {
  render() {
    return <Img className="size" src={logo} />;
  }
}

export default AbakusLogo;
