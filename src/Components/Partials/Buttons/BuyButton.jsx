import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
  padding: 0.3em 1em;
  height: 50px;
  border: none;
  margin: 9px;
  color: white;
  text-transform: uppercase;
  font-family: "Titillium Web", sans-serif;
  font-size: 1.3em;
  font-weight: 600;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.secondary};
  &:hover {
    background-color: #00000099;
    transition: 300ms ease-in-out;
  }
`;

const BuyButton = (props) => {
  return <MyButton>{props.children}</MyButton>;
};

export default BuyButton;
