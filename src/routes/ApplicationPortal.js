import React, { Component } from "react";
import styled from "styled-components";
import ApplicationForm from "src/routes/applicationForm/ApplicationForm";
import CommitteesPage from "src/routes/committeesPage/CommitteesPage";
import { media } from "src/styles/mediaQueries";

class ApplicationPortal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: undefined,
      committees: [],
      error: null,
      selectedCommittees: {},
      isCommitteesPage: true
    };

    const hostname = window && window.location && window.location.hostname;
    if (hostname === "opptak.abakus.no") {
      this.API_ROOT = "https://opptak.abakus.no";
    } else {
      this.API_ROOT = "http://localhost:8000";
    }
  }

  toggleCommittesPageFlag = () => {
    this.setState({ isCommitteesPage: !this.state.isCommitteesPage });
  };

  startApplying = () => {
    const { selectedCommittees } = this.state;
    const committees = Object.keys(selectedCommittees).filter(
      committee => selectedCommittees[committee]
    );
    this.props.startApplying(committees);
  };

  toggleCommittee = name => {
    this.setState(state => ({
      selectedCommittees: {
        ...state.selectedCommittees,
        [name]: !state.selectedCommittees[name]
      }
    }));
  };

  componentDidMount() {
    fetch(`${this.API_ROOT}/api/committee/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(results => results.json())
      .then(
        data => {
          console.log(data);
          this.setState({
            committees: data
          });
        },
        error => {
          console.log(error);
          this.setState({ error });
        }
      );
  }

  render() {
    const { error } = this.state;
    const { location } = this.props;
    console.log(this.state);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <PageContainer>
          {location.pathname.startsWith("/committees") ? (
            <CommitteesPage
              {...this.state}
              toggleCommittee={this.toggleCommittee}
            />
          ) : (
            <ApplicationForm {...this.state} />
          )}
        </PageContainer>
      );
    }
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

export default ApplicationPortal;
