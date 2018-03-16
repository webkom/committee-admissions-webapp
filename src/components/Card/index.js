import styled from "styled-components";

const Card = styled.div.attrs({
  margin: props => props.space || "1rem",
  padding: props => props.space || "1rem"
})`
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);

  background: ${props => (props.primary ? "#e20d13" : "white")};
  color: ${props => (props.primary ? "white" : "black")};

  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;

const CardTitle = styled.h1.attrs({
  fontSize: props => props.fontSize || "1.5em"
})`
  margin: 1rem 1.5rem;
  font-size: ${props => props.fontSize};
`;

const CardParagraph = styled.p.attrs({
  fontSize: props => props.fontSize || "1em"
})`
  margin: 1rem 1.5rem;
  font-size: ${props => props.fontSize};
`;

export default Card;
export { CardTitle, CardParagraph };
