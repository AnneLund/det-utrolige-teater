import React from "react";
import { Link } from "react-router-dom";
import { Page } from "../../../Layout/Page";
import BuyButton from "../Buttons/BuyButton";
import Table from "./Table";
import { Ticket } from "./Ticket";

const SubmitOrder = () => {
  return (
    <Page title="Køb billetter">
      <Ticket>
        <picture>
          <img src="https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg?ssl=1" alt="" />
        </picture>
        <figcaption>
          <header>
            <h1>Godkend ordre</h1>
          </header>

          <article>
            <h4>Produkter:</h4>
            <ul>
              <li>
                <h5>Forestilling:</h5>
              </li>
              <li>
                <h5>Scene:</h5>
              </li>
              <li>
                <h5>Dato:</h5>
              </li>
            </ul>
          </article>

          <Table />

          <article>
            <h4>Kunde:</h4>
            <ul>
              <li>
                <h5>gewgwergweg</h5>
              </li>
              <li>
                <h5>gewgqegewg</h5>
              </li>
              <li>
                <h5>Email: egqgqegqeg</h5>
              </li>
            </ul>
            <footer>
              <h4>Billetterne sendes elektronisk til din email</h4>
            </footer>
          </article>
        </figcaption>
      </Ticket>
      <div className="button">
        <BuyButton>
          <Link to="/event/buyticket">Tilbage</Link>
        </BuyButton>
        <BuyButton>
          <Link to="/thankyou">Godkend bestilling</Link>
        </BuyButton>
      </div>
    </Page>
  );
};

export default SubmitOrder;
