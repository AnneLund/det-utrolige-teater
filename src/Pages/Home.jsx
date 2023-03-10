import React from "react";
import HighlightedEvent from "./Events/HighlightedEvent";
import RandomEvents from "./Events/RandomEvents";
import { Page } from "../Layout/Page";
import SendButton from "../Components/Partials/Buttons/SendButton";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Page title="Forside">
      <HighlightedEvent />
      <RandomEvents />
      <SendButton right={true}>
        <Link to="/events">Se alle forestillinger</Link>
      </SendButton>
    </Page>
  );
};

export default Home;
