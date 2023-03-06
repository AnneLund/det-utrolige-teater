import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
  padding: 0.5em;
  margin: 1em;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  color: white;
  text-transform: uppercase;
  font-family: "Titillium Web", sans-serif;
  font-size: 1.2em;
  font-weight: 600;
  width: 100%;
`;

const ButtonTwo = (props) => {
  return <MyButton>{props.children}</MyButton>;
};

export default ButtonTwo;
