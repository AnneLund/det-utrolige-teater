import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
  padding: 0.35em 1em;
  margin-left: 0.5em;
  background-color: #61e692;
  border: none;
  color: white;
  text-transform: uppercase;
  font-family: "Titillium Web", sans-serif;
  font-size: 1.2em;
  border-radius: 0 5px 5px 0;
  cursor: pointer;

  &:hover {
    background-color: #35794e;
    transition: 300ms ease-in-out;
  }
`;

const LoginButton = (props) => {
  return <MyButton>{props.children}</MyButton>;
};

export default LoginButton;
