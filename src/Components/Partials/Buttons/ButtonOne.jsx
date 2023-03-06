import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
  padding: 1em;
  margin: 1em;
  width: 100%;
  border: none;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.tertiary};
`;

const Button = (props) => {
  return <MyButton>{props.children}</MyButton>;
};

export default Button;
