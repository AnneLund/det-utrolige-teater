import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
  padding: 0.5em;
  margin: 1em;
  width: 100%;
  border: none;
  color: white;
  text-transform: uppercase;
  font-family: "Titillium Web", sans-serif;
  font-size: 1.2em;
  font-weight: 600;
  background-color: ${(props) => (props.readmore ? props.theme.colors.tertiary : props.theme.colors.primary)};
`;

const Button = (props) => {
  return <MyButton readmore={props.readmore}>{props.children}</MyButton>;
};

export default Button;
