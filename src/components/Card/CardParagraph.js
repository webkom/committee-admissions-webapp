import styled from "styled-components";

const CardParagraph = styled.p.attrs({
  fontSize: props => props.fontSize || "1em",
  margin: props => props.margin || "1rem 1.5rem",
  lineHeight: props => props.lineHeight || ""
})`
  margin: ${props => props.margin};
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
`;

export default CardParagraph;
