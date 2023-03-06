import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
  padding: 1em;
  margin: 1em;
`;

const Button = (props) => {
  return <MyButton>{props.children}</MyButton>;
};

export default Button;
