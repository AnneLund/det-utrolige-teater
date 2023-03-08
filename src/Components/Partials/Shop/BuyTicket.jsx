import React from "react";
import { useParams } from "react-router-dom";
import { Page } from "../../../Layout/Page";
import ContactForm from "../ContactForm";
import { Ticket } from "./Ticket";
import useGetListItemById from "../../Hooks/useGetListItemById";

const BuyTicket = () => {
  const { id } = useParams();
  const { state: events } = useGetListItemById("events", id);

  return (
    <Page title="Køb billetter">
      {events && events.item ? (
        <Ticket>
          <picture>
            <img src={events.item.image} alt={events.item.title} />
          </picture>
          <figcaption>
            <header>
              <h1>Køb billet</h1>
            </header>

            <div className="location">
              <h4>{events.item.title}</h4>
              <h5>
                {events.item.stage_name}
                <span>
                  {new Date(events.item.startdate).toLocaleDateString("da-DK", { month: "long", day: "numeric" })}
                  &nbsp;
                </span>
                KL. {events.item.starttime}
              </h5>
            </div>
            <ContactForm item={events.item} />
          </figcaption>
        </Ticket>
      ) : (
        <p>Indlæser..</p>
      )}
    </Page>
  );
};

export default BuyTicket;
