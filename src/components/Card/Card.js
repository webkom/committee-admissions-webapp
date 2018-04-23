import styled from "styled-components";

const Card = styled.div.attrs({
  margin: props => props.margin || "1rem",
  padding: props => props.padding || "1rem",
  width: props => props.width || "auto"
})`
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);

  background: ${props => (props.primary ? "#e20d13" : "white")};
  color: ${props => (props.primary ? "white" : "black")};

  margin: ${props => props.margin};
  padding: ${props => props.padding};
  width: ${props => props.width};
`;

export default Card;
