import styled from "styled-components";
import React from "react";
import "./CommitteeApplication.css";
import { Card, CardParagraph, CardTitle } from "src/components/Card";
import Textarea from "react-textarea-autosize";
import { media } from "src/styles/mediaQueries";

const UnstyledLogo = ({ className, logo }) => (
  <img className={className} src={logo} alt="Logo" />
);

const UnstyledCommitteeName = ({ className, name }) => (
  <label htmlFor={name.toLowerCase()}>
    <span className={className}>{name}</span>
  </label>
);

const Logo = styled(UnstyledLogo)`
  object-fit: scale-down;
  width: 100%;
  height: 100%;
  grid-area: logo;
  justify-self: center;
  align-self: center;
  z-index: 1;
  ${media.handheld`
    padding: 0.3em;
      `};
`;

const CommitteeName = styled(UnstyledCommitteeName)`
  font-weight: bold;
  margin: 0.5em;
  font-size: 1.5em;
  grid-area: committeeName;
  ${media.handheld`
    font-size: 1.3em;
      `};
`;

const GridContainer = styled.div`
  display: grid;
  margin: 0.5em;
  grid-template-columns: 11em 1fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "logo committeeName"
    "logo response"
    ". input";
  align-items: center;
  ${media.handheld`
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 3rem repeat(2, auto);
    grid-template-areas:
      "logo committeeName"
      "response response"
      "input input";
    `};
`;

const InputFeedback = ({ error }) =>
  error ? <div className="input-feedback">{error}</div> : null;

const CommitteeApplication = ({
  responseLabel,
  committee,
  field: { name, onChange, value, handleBlur },
  form: { touched, errors }
}) => {
  const error = touched[name] && errors[name];
  return (
    <GridContainer>
      <Logo logo={`/committees/${name}.png`} />
      <CommitteeName name={committee} />

      <Card className="response" margin="0.5rem 1rem">
        <CardTitle margin="0.5rem" fontSize="0.8em">
          Dette ønsker komiteen at du inkluderer
        </CardTitle>
        <CardParagraph margin="0.5rem">{responseLabel}</CardParagraph>
      </Card>

      <Card className="input" margin="0.5rem 1rem">
        <CardTitle margin="0.5rem" fontSize="0.8em">
          Skriv søknaden din her <InputFeedback error={error} />
        </CardTitle>
        <Textarea
          className="textarea"
          type="textarea"
          name={name}
          id={name}
          onChange={onChange}
          onBlur={handleBlur}
          placeholder="Skriv her"
          value={value}
          rows="10"
        />
      </Card>
    </GridContainer>
  );
};
export default CommitteeApplication;
