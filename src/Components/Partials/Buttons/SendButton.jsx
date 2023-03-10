import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
  padding: 0.3em 1em;
  height: 50px;
  border: none;
  margin-bottom: 9px;
  border-radius: 5px;
  color: white;
  text-transform: uppercase;
  font-family: "Titillium Web", sans-serif;
  font-size: 1.3em;
  position: ${(props) => (props.position ? "absolute" : null)};
  right: -1em;
  bottom: -10em;
  font-weight: 600;
  float: ${(props) => (props.right ? "right" : null)};
  cursor: pointer;
  background-color: ${(props) => (props.color ? props.theme.colors.primary : props.theme.colors.secondary)};
  &:hover {
    background-color: #00000099;
    transition: 300ms ease-in-out;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
    position: ${(props) => (props.right ? "relative" : null)};
    right: 0;
    bottom: inherit;
  }
`;

// Stylet knap med farver, alt efter dens propertys
const SendButton = (props) => {
  return (
    <MyButton color={props.color} position={props.position} right={props.right}>
      {props.children}
    </MyButton>
  );
};

export default SendButton;
