import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
  margin-left: 20px;
  width: ${(props) => (props.listitem ? "120px" : "160px")};
  height: ${(props) => (props.listitem ? "50px" : "70px")};
  border: none;
  color: white;
  text-transform: uppercase;
  font-family: "Titillium Web", sans-serif;
  font-size: ${(props) => (props.secondary ? "1em" : "1.3em")};
  font-weight: 600;
  cursor: pointer;
  background-color: ${(props) =>
    props.logout ? props.theme.colors.secondary : props.readmore ? props.theme.colors.tertiary : props.theme.colors.primary};
  &:hover {
    background-color: #00000099;
    transition: 300ms ease-in-out;
  }

  @media (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
    font-size: 2.5vw;
    width: 120px;
    height: 50px;
  }
`;

const Button = (props) => {
  return (
    <MyButton logout={props.logout} readmore={props.readmore} secondary={props.secondary} listitem={props.listitem}>
      {props.children}
    </MyButton>
  );
};

export default Button;
