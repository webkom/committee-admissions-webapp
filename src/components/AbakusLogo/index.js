import React from "react";
import Img from "react-image";
import logo from "public/logo-dark.png";
import styled from "styled-components";

const Logo = ({ className }) => <Img className={className} src={logo} />;

const AbakusLogo = styled(Logo).attrs({
  size: props => props.size || "8em"
})`
  padding: 1.5em;
  object-fit: scale-down;
  max-height: ${props => props.size};
`;

export default AbakusLogo;
