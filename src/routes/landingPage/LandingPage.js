import React, { Component } from "react";
import styled from "styled-components";

import AbakusLogo from "src/components/AbakusLogo";
import LinkButton from "src/components/LinkButton";
import { Card, CardTitle, CardParagraph } from "src/components/Card";

import "./LandingPage.css";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: undefined,
      loading: true,
      admissions: [],
      error: null
    };

    const hostname = window && window.location && window.location.hostname;
    if (hostname === "opptak.abakus.no") {
      this.API_ROOT = "https://opptak.abakus.no";
    } else {
      this.API_ROOT = "http://localhost:8000";
    }
  }

  componentDidMount() {
    fetch(`${this.API_ROOT}/api/admission/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(results => results.json())
      .then(
        data => {
          this.setState({
            loading: false,
            admissions: data
          });
        },
        error => {
          this.setState({ loading: false, error });
        }
      );
  }

  render() {
    const { error, loading, admissions } = this.state;
    console.log(admissions);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container flex-center">
          <AbakusLogo />
          <PageTitle className="title">Opptak til komiteer i Abakus</PageTitle>
          <Card margin={"1em 1em 2.5em 1em"}>
            <CardTitle>Her kan du søke til komiteer i Abakus</CardTitle>
            <CardParagraph>
              Søknadsfristen for ny søknad er <b>15.september kl 23:59</b>.<br />
              Søker du etter dette er du ikke garantert intervju.
              <br /> Fristen for å endre søknad er <b>20.september kl 23:59</b>.
            </CardParagraph>
          </Card>
          <LinkButton to="/committees">Gå til søknad</LinkButton>
        </div>
      );
    }
  }
}

const PageTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin: 0.2em 0 0 0;
  line-height: 1.2em;
`;

export default LandingPage;
