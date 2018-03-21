import styled from "styled-components";

const CardTitle = styled.h1.attrs({
  fontSize: props => props.fontSize || "1.5em"
})`
  margin: 1rem 1.5rem;
  font-size: ${props => props.fontSize};
  line-height: 1.4em;
`;

export default CardTitle;
