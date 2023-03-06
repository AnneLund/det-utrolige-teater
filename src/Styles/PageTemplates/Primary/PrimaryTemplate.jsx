import React from "react";
import { StyledPrimary } from "./Primary.styled";
import { Page } from "../../../Layout/Page";
import RandomEvents from "../../../Components/Partials/RandomEvents";

export const PrimaryTemplate = (props) => {
  return (
    <StyledPrimary>
      <Page title="Forside" description="Information og nyheder fra Det Utrolige Teater">
        {props.children}
      </Page>
      <RandomEvents />
    </StyledPrimary>
  );
};

export default PrimaryTemplate;
