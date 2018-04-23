import React, { Component } from "react";
import styled from "styled-components";

import AbakusLogo from "src/components/AbakusLogo";
import LinkButton from "src/components/LinkButton";
import CommitteeCard from "src/components/CommitteeCard";
import { Card, CardParagraph } from "src/components/Card";

import { media } from "src/styles/mediaQueries";
import "./CommitteesPage.css";

class CommitteesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props);
  }

  startApplying = () => {
    const { selectedCommittees } = this.state;
    const committees = Object.keys(selectedCommittees).filter(
      committee => selectedCommittees[committee]
    );
    this.props.startApplying(committees);
  };

  toggleCommittee = name => {
    this.props.toggleCommittee(name);
  };

  render() {
    const { committees } = this.props;
    const committeeCards = committees.map(
      (committee, index) => (
        console.log(this.props.selectedCommittees),
        (
          <CommitteeCard
            name={committee.name}
            description={committee.description}
            key={committee.name + "-" + index}
            onToggle={this.toggleCommittee}
            isChosen={this.props.selectedCommittees[committee.name]}
          />
        )
      )
    );
    console.log(committees);

    return (
      <PageContainer>
        <AbakusLogo size={"6em"} />
        <PageTitle>Velg komitéer å søke på</PageTitle>

        <Card width="30em" margin="1em auto">
          <CardParagraph>
            Velg alle de komitéene du ønsker å søke på ved å trykke på boksen
            til komitéen. Les mer om de forskjellige komiteene på{" "}
            <a href="https://abakus.no/pages/info/om-oss" target="blank">
              abakus.no
            </a>.
          </CardParagraph>
        </Card>
        <CommittesContainer>
          {committeeCards}
          <CardNextDiv>
            <NextButton to="/application" height="3em" margin="auto">
              Videre ->
            </NextButton>
          </CardNextDiv>
        </CommittesContainer>
      </PageContainer>
    );
  }
}

const PageContainer = styled.div`
  width: 70em;
  margin: 0 auto 4em auto;
  min-height: 100vh;
  ${media.handheld`
    width: 95vw;
    `};
`;

const CommittesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  ${media.handheld`
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(8, 1fr);
  `};
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin: 0.2em 0 0 0;
  line-height: 1.2em;
  display: inline;
  ${media.handheld`
    margin: 0 1em 0 1em;
    font-size: 2.5rem;
  `};
`;

const CardNextDiv = styled.div`
  width: 21rem;
  margin: 1em;
  padding: 2em 1em;
  display: flex;
  align-items: center;
  justify-contents: center;
`;

const NextButton = styled(LinkButton)`
  background: gray;
`;

export default CommitteesPage;
