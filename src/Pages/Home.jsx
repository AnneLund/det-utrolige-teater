import React from "react";
import HighlightedEvent from "../Components/Partials/HighlightedEvent";
import RandomEvents from "../Components/Partials/RandomEvents";
import PrimaryTemplate from "../Styles/PageTemplates/Primary/PrimaryTemplate";

const Home = () => {
  return (
    <PrimaryTemplate>
      <HighlightedEvent />
    </PrimaryTemplate>
  );
};

export default Home;
