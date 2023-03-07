import React from "react";
import { Link } from "react-router-dom";
import { Page } from "../../../Layout/Page";
import BuyButton from "../Buttons/BuyButton";
import ContactForm from "../ContactForm";
import Table from "./Table";
import { Ticket } from "./Ticket";

const BuyTicket = () => {
  return (
    <Page title="Køb billetter">
      <Ticket>
        <picture>
          <img src="https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg?ssl=1" alt="" />
        </picture>
        <figcaption>
          <header>
            <h1>Køb billet</h1>
          </header>

          <div className="location">
            <h4>Titel</h4>
            <h5>Tid og sted</h5>
          </div>

          <ContactForm />
        </figcaption>
      </Ticket>
      <div className="button">
        <BuyButton>
          <Link to="/thankyou">Godkend bestilling</Link>
        </BuyButton>
      </div>
    </Page>
  );
};

export default BuyTicket;
