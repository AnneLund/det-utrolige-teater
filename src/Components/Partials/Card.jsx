import React from "react";
import styled from "styled-components";

const ItemCard = styled.figure`
  width: 300px;
`;

const Card = (props) => {
  return <ItemCard>{props.children}</ItemCard>;
};

export default Card;
