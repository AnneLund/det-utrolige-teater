import React from "react";
import { Page } from "../../../Layout/Page";
import styled from "styled-components";

const ThankYou = styled.header`
  display: flex;
  margin: 1em auto;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.secondary};
`;

const Thankyou = () => {
  return (
    <Page title="Tak for din bestilling!">
      <ThankYou>
        <h1>Tak for din bestilling!</h1>
      </ThankYou>
    </Page>
  );
};

export default Thankyou;
