import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";
import CommitteeLogoName from "src/components/CommitteeLogoName";
import CommitteeApplication from "src/components/CommitteeApplication";
import styled from "styled-components";
import Button from "src/components/Button";
import { media } from "src/styles/mediaQueries";
import PageTitle from "src/components/PageTitle";
import "./ApplicationForm.css";

const GridContainer = styled.div`
  display: grid;
  margin: 0.5em auto;
  width: 95%;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "form .";
  ${media.handheld`
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
    "committees"
    "form";
    grid-gap: 1em;
    `};
`;

const ChooseCommittesContainer = styled.div`
  grid-area: committees;
  position: fixed;
  top: 11em;
  left: 90%;
  transform: translateX(-90%);
  ${media.handheld`

    `};
`;

const ChooseCommittesContainerMobile = styled.div`
  ${media.handheld`
    display: flex;
    flex-wrap: wrap;
    `};
`;

const PageSubTitle = styled.h2`
  font-size: 2rem;
  margin: 0.6em 0;
  line-height: 1.2em;
  color: gray;
  font-size: 2rem;
  ${media.handheld`
    text-align: center;
    margin: 0.3em;
    font-size: 1.5rem;
    `};
`;

class ApplicationForm extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  toggleCommittee = name => {
    this.props.toggleCommittee(name.toLowerCase());
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    console.log(this.props);
    const {
      touched,
      errors,
      isSubmitting,
      committees,
      selectedCommittees,
      handleSubmit
    } = this.props;

    const chooseCommitteesItems = committees.map((committee, index) => (
      <CommitteeLogoName
        name={committee.name}
        key={committee.name + "-" + index}
        isChosen={!!this.props.selectedCommittees[committee.name.toLowerCase()]}
        toggleCommittee={this.toggleCommittee}
      />
    ));

    const hasSelected =
      committees.filter(
        committee => selectedCommittees[committee.name.toLowerCase()]
      ).length >= 1;

    if (!isMobile) {
      return (
        <div>
          <PageTitle>Søknad til komiteer</PageTitle>

          <GridContainer>
            <Form className="form">
              <PageSubTitle>Dine søknader</PageSubTitle>
              {hasSelected ? (
                committees
                  .filter(
                    committee =>
                      selectedCommittees[committee.name.toLowerCase()]
                  )
                  .map(({ name, response_label }, index) => (
                    <Field
                      component={CommitteeApplication}
                      committee={name}
                      name={name.toLowerCase()}
                      responseLabel={response_label}
                      error={
                        touched[name.toLowerCase()] &&
                        errors[name.toLowerCase()]
                      }
                      key={`${name.toLowerCase()} ${index}`}
                    />
                  ))
              ) : (
                <h3>Du har ikke valgt noen komiteer.</h3>
              )}
            </Form>
            <ChooseCommittesContainer>
              <PageSubTitle>Komiteer</PageSubTitle>
              {chooseCommitteesItems}
            </ChooseCommittesContainer>
          </GridContainer>
          {hasSelected && (
            <Button
              className="submit-btn"
              margin="0 auto 3em auto"
              onClick={handleSubmit}
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </Button>
          )}
        </div>
      );
    } else {
      return (
        <div>
          <PageTitle>Søknad til komiteer</PageTitle>

          <GridContainer>
            <Form className="form">
              <PageSubTitle>Dine søknader</PageSubTitle>
              {hasSelected ? (
                committees
                  .filter(committee => selectedCommittees[committee.name])
                  .map(({ name, response_label }, index) => (
                    <Field
                      component={CommitteeApplication}
                      committee={name}
                      name={name.toLowerCase()}
                      responseLabel={response_label}
                      error={
                        touched[name.toLowerCase()] &&
                        errors[name.toLowerCase()]
                      }
                      key={`${name.toLowerCase()} ${index}`}
                    />
                  ))
              ) : (
                <h3 className="noChosen">Du har ikke valgt noen komiteer.</h3>
              )}
            </Form>
            <div className="committees-mobile">
              <PageSubTitle>Velg komiteer</PageSubTitle>
              <ChooseCommittesContainerMobile>
                {chooseCommitteesItems}
              </ChooseCommittesContainerMobile>
            </div>
          </GridContainer>
          {hasSelected && (
            <Button
              className="submit-btn"
              margin="0 auto 3em auto"
              onClick={handleSubmit}
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </Button>
          )}
        </div>
      );
    }
  }
}

const FormikApp = withFormik({
  mapPropsToValues() {
    return {
      webkom: "",
      fagkom: "",
      bedkom: "",
      readme: "",
      labamba: "",
      koskom: "",
      arrkom: "",
      pr: ""
    };
  },
  handleSubmit(
    values,
    {
      props: { selectedCommittees, apiRoot },
      resetForm,
      setSubmitting,
      setFieldValue
    }
  ) {
    var submission = {};
    Object.keys(values)
      .filter(committee => selectedCommittees[committee])
      .forEach(name => {
        submission[name] = values[name];
      });

    fetch(`${apiRoot}/api/application/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(submission)
    })
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => console.log(err));

    //setTimeout(() => {
    //  alert(JSON.stringify(submission, null, 2));
    //  resetForm();
    //  setSubmitting(false);
    //}, 2000);
  },
  validationSchema: props => {
    return Yup.lazy(values => {
      var selectedCommittees = Object.keys(values).filter(
        committee => props.selectedCommittees[committee]
      );
      const schema = {};
      selectedCommittees.forEach(name => {
        schema[name] = Yup.string()
          .min(20, "Det var da litt kort? 20 bokstaver klarer du iallefall :)")
          .required("Søknadsteksten kan ikke være tom!");
      });
      return Yup.object().shape(schema);
    });
  },
  displayName: "ApplicationForm",
  validateOnChange: true
})(ApplicationForm);

export default FormikApp;
