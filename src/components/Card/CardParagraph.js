import styled from "styled-components";

const CardParagraph = styled.p.attrs({
  fontSize: props => props.fontSize || "1em"
})`
  margin: 1rem 1.5rem;
  font-size: ${props => props.fontSize};
`;

export default CardParagraph;
