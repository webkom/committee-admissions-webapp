import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import AbakusLogo from "src/components/AbakusLogo";
import Button from "src/components/Button";
import Card, { CardTitle, CardParagraph } from "src/components/Card";
import "./LandingPage.css";

const PageTitle = styled.h1`
  font-size: 4em;
  text-align: center;
`;

class LandingPage extends Component {
  render() {
    return (
      <div className="container flex-center">
        <div className="flex-center">
          <AbakusLogo />
          <PageTitle>Opptak til komiteer i Abakus</PageTitle>
          <Card>
            <CardTitle>Her kan du søke til komiteer i Abakus</CardTitle>
            <CardParagraph>
              Søknadsfristen for ny søknad er <b>15.september kl 23:59</b>.<br />
              Søker du etter dette er du ikke garantert intervju.
              <br /> Fristen for å endre søknad er <b>20.september kl 23:59</b>.
            </CardParagraph>
          </Card>
          <Link to="/committees">Gå til søknad</Link>
        </div>
      </div>
    );
  }
}

export default LandingPage;
