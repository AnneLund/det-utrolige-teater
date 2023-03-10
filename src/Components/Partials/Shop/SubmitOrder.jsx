import React from "react";
import { Link, useParams } from "react-router-dom";
import { Page } from "../../../Layout/Page";
import useGetListItemsByEndPoint from "../../Hooks/useGetListItemsByEndPoint";
import { useShoppingCardStore } from "../Shop/useShoppingCard";
import BuyButton from "../Buttons/BuyButton";
import { useCustomInfoStore } from "./CustomerInfo/useCostumInfoStore";
import Table from "./Table";
import { Ticket } from "./Ticket";

const SubmitOrder = () => {
  const { cartItems } = useShoppingCardStore();
  const { customDetails } = useCustomInfoStore();
  const { reservation_id } = useParams();
  const { state: reservations } = useGetListItemsByEndPoint("reservations", reservation_id);

  return (
    <Page title="Godkend ordre">
      {reservations && reservations.items && cartItems ? (
        <>
          <Ticket>
            {cartItems.map((product) => (
              <figure>
                <picture>
                  <img src={product.image} alt={product.title} />
                </picture>
                <figcaption>
                  <article>
                    <h4>Produkt:</h4>
                    <ul>
                      <li>
                        <h5>Forestilling: {product.title}</h5>
                      </li>
                      <li>
                        <h5>Scene: {product.stage_name}</h5>
                      </li>
                      <li>
                        <h5>Dato: {product.startdate}</h5>
                      </li>
                    </ul>
                  </article>

                  <Table />

                  <article>
                    <h4>Kunde:</h4>

                    <ul>
                      <li>
                        {customDetails[0].id.firstname} {customDetails[0].id.lastname}
                      </li>
                      <li>{customDetails[0].id.address}</li>
                      <li>{customDetails[0].id.zipcodeCity}</li>
                      <li>Email: {customDetails[0].id.email}</li>
                    </ul>

                    <footer>
                      <h4>Billetterne sendes elektronisk til din email</h4>
                    </footer>
                  </article>
                </figcaption>
              </figure>
            ))}
          </Ticket>

          <div className="button">
            <BuyButton>
              <Link to="/event/buyticket">Tilbage</Link>
            </BuyButton>
            <BuyButton>
              <Link to="/thankyou">Godkend ordre</Link>
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
