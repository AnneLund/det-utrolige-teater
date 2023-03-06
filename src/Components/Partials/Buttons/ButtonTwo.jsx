import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
  padding: 1em;
  margin: 1em;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  color: white;
  text-transform: uppercase;
  width: 100%;
`;

const ButtonTwo = (props) => {
  return <MyButton>{props.children}</MyButton>;
};

export default ButtonTwo;
