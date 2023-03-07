import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
  padding: 0.5em 0.8em;
  margin-left: 20px;
  width: 170px;
  height: 80px;
  border: none;
  color: white;
  text-transform: uppercase;
  font-family: "Titillium Web", sans-serif;
  font-size: ${(props) => (props.secondary ? "1em" : "1.3em")};
  font-weight: 600;
  cursor: pointer;
  background-color: ${(props) => (props.readmore ? props.theme.colors.tertiary : props.theme.colors.primary)};
  &:hover {
    background-color: #00000099;
    transition: 300ms ease-in-out;
  }
`;

const Button = (props) => {
  return (
    <MyButton readmore={props.readmore} secondary={props.secondary}>
      {props.children}
    </MyButton>
  );
};

export default Button;
