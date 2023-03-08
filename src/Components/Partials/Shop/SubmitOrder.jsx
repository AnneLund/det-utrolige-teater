import React from "react";
import { Link, useParams } from "react-router-dom";
import { Page } from "../../../Layout/Page";
import useGetListItemsByEndPoint from "../../Hooks/useGetListItemsByEndPoint";
import { useShoppingCardStore } from "../../ShoppingCart/useShoppingCard";
import BuyButton from "../Buttons/BuyButton";
import Table from "./Table";
import { Ticket } from "./Ticket";

const SubmitOrder = () => {
  const { cartItems } = useShoppingCardStore();
  console.log(cartItems);

  const { reservation_id } = useParams();
  const { state: reservations } = useGetListItemsByEndPoint("reservations", reservation_id);
  console.log(reservations);
  return (
    <Page title="Godkend ordre">
      {reservations && reservations.items && cartItems ? (
        <>
          {cartItems.map((product) => (
            <Ticket key={product.id}>
              <picture>
                <img src={product.image} alt={product.title} />
              </picture>
              <figcaption>
                <header>
                  <h1>Godkend ordre</h1>
                </header>

                <article>
                  <h4>Produkter:</h4>
                  <ul>
                    <li>
                      <h5>Forestilling: {product.stage_name}</h5>
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
          ))}

          <div className="button">
            <BuyButton>
              <Link to="/event/buyticket">Tilbage</Link>
            </BuyButton>
            <BuyButton>
              <Link to="/thankyou">Godkend bestilling</Link>
            </BuyButton>
          </div>
        </>
      ) : (
        <p>Indlæser..</p>
      )}
    </Page>
  );
};

export default SubmitOrder;
