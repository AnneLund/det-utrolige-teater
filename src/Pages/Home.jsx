import React from "react";
import Form from "../Components/Partials/Form";
import Rating from "../Components/Partials/Rating";
import PrimaryTemplate from "../Styles/PageTemplates/Primary/PrimaryTemplate";

const Home = () => {
  return (
    <PrimaryTemplate>
      <Form />
      <Rating />
    </PrimaryTemplate>
  );
};

export default Home;
