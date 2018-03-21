import React, { Component } from "react";
import styled from "styled-components";

import AbakusLogo from "src/components/AbakusLogo";
import LinkButton from "src/components/LinkButton";
import { Card, CardTitle, CardParagraph } from "src/components/Card";

import "./LandingPage.css";

class LandingPage extends Component {
  render() {
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

const PageTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin: 0.2em 0 0 0;
  line-height: 1.2em;
`;

export default LandingPage;
