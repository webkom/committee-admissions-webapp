import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkButton = styled(Link)`
  color: #fff;
  font-weight: bold;
  background: #db3737;
  border: 1px solid #a82a2a;
  padding: 10px 30px;
  border-radius: 4px;
  outline: none;
  display: block;
`;

export default LinkButton;
