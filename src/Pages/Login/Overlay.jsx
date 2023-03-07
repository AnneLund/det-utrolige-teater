import styled from "styled-components";
import React from "react";
import Login from "./Login";

const LoginOverLay = styled.section`
  position: absolute;
  display: flex;
  justify-content: right;
  right: 0;
  top: 0;
  width: 100%;
  height: 100vw;
  background-color: #dfdfdfee;
  transition: 500ms ease-in-out;
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  height: fit-content;
  margin: 1em;
`;

const Overlay = () => {
  return (
    <LoginOverLay>
      <Container>
        <Login />
      </Container>
    </LoginOverLay>
  );
};

export default Overlay;
