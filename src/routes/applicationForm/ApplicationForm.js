import React, { Component } from "react";
import styled from "styled-components";
import LinkButton from "src/components/LinkButton";

class ApplicationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    const hostname = window && window.location && window.location.hostname;
    if (hostname === "opptak.abakus.no") {
      this.API_ROOT = "https://opptak.abakus.no";
    } else {
      this.API_ROOT = "http://localhost:8000";
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <LinkButton to="/committees">Gå til søknad</LinkButton>
      </div>
    );
  }
}

export default ApplicationForm;
