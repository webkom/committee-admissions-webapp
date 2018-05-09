import styled from "styled-components";
import React from "react";
import { media } from "src/styles/mediaQueries";

const UnstyledLogo = ({ className, logo }) => (
  <img className={className} src={logo} alt="Logo" />
);

const UnstyledIcon = ({ className, icon }) => (
  <i className={`material-icons ${className}`}>{icon}</i>
);

const Logo = styled(UnstyledLogo)`
  object-fit: scale-down;
  width: 2.3em;
  ${media.handheld`
      display: none`};
`;

const CommitteeName = styled.span`
  font-weight: bold;
  margin-left: 0.5em;
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5em;
  ${media.handheld`
      width: 50%;
      margin: 0;
    `};
`;

const Icon = styled(UnstyledIcon).attrs({
  color: props => props.color || "gray"
})`
  color: ${props => props.color};
`;

const CommitteeLogoName = ({ name, toggleCommittee, isChosen }) => {
  return (
    <FlexDiv>
      <button onClick={() => toggleCommittee(name.toLowerCase())}>
        {isChosen ? (
          <Icon color="#b11c11" icon="remove_circle" />
        ) : (
          <Icon icon="add_circle" />
        )}
      </button>{" "}
      <Logo logo={`/committees/${name.toLowerCase()}.png`} />{" "}
      <CommitteeName>{name}</CommitteeName>
    </FlexDiv>
  );
};
export default CommitteeLogoName;
