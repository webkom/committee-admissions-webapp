import React from "react";
import Img from "react-image";
import logo from "public/logo-dark.png";
import styled from "styled-components";
import { media } from "src/styles/mediaQueries";

const Logo = ({ className }) => <Img className={className} src={logo} />;

const AbakusLogo = styled(Logo).attrs({
  size: props => props.size || "8em"
})`
  padding: 1.5em;
  object-fit: scale-down;
  max-height: ${props => props.size};
  ${media.handheld`
    max-height: 6em;
    `};
`;

export default AbakusLogo;
