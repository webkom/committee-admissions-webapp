import React, { Component } from "react";
import styled from "styled-components";
import Moment from "react-moment";
import "moment/locale/nb";

import AbakusLogo from "src/components/AbakusLogo";
import LinkButton from "src/components/LinkButton";
import { Card, CardTitle, CardParagraph } from "src/components/Card";

import { media } from "src/styles/mediaQueries";
import "./LandingPage.css";

Moment.globalLocale = "nb";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: undefined,
      admission: [],
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
            admission: data[0]
          });
        },
        error => {
          this.setState({ error });
        }
      );
  }

  render() {
    const { error, admission } = this.state;
    console.log(admission);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div className="container">
          <AbakusLogo />
          <PageTitle>Opptak til komiteer i Abakus</PageTitle>
          <PageSubTitle>
            <Moment format="YYYY">{admission.public_deadline}</Moment>
          </PageSubTitle>
          <Card margin={"1em 1em 2.5em 1em"}>
            <CardTitle>Her kan du søke til komiteer i Abakus</CardTitle>
            <CardParagraph>
              Søknadsfristen for ny søknad er <b>
                <Moment format="dddd Do MMMM, \k\l. HH:mm">
                  {admission.public_deadline}
                </Moment>
              </b>.
              <br />
              Søker du etter dette er du ikke garantert intervju.
              <br /> Fristen for å endre søknad er{" "}
              <b>
                <Moment format="dddd Do MMMM, \k\l. HH:mm">
                  {admission.application_deadline}
                </Moment>
              </b>.
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
  ${media.handheld`
    font-size: 2.5rem;
  `};
`;

const PageSubTitle = PageTitle.extend`
  color: gray;
  font-size: 2.5rem;
`;

export default LandingPage;
