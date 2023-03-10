import React, { useState } from "react";
import { Page } from "../../Layout/Page";
import HighlightedEvent from "../../Pages/Events/HighlightedEvent";
import { EventsContainer } from "./EventsContainer";
import { Card } from "../../Components/Partials/Card/CardStyled";
import Button from "../../Components/Partials/Buttons/ButtonOne";
import { Link } from "react-router-dom";
import useGetListItemsByEndPoint from "../../Components/Hooks/useGetListItemsByEndPoint";

const Events = () => {
  const { state: events } = useGetListItemsByEndPoint("events");
  const [selectedOption, setSelectedOption] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);

  const handleSelectChange = (event) => {
    const selectedGenre = event.target.value;
    setSelectedOption(selectedGenre);
    setFilteredEvents(events.items.filter((op) => op.genre === selectedGenre));
  };

  return (
    <Page title="Forestillinger og events">
      <HighlightedEvent />
      <EventsContainer>
        {events && events.items ? (
          <>
            <header>
              <select value={selectedOption} onChange={handleSelectChange}>
                <option value=""> --- Vælg en genre --- </option>
                {events.items
                  .filter((op, index, self) => index === self.findIndex((t) => t.genre === op.genre))
                  .map((op) => (
                    <option key={op.id}>{op.genre}</option>
                  ))}
              </select>
              <h2>Oversigt</h2>
            </header>

            {filteredEvents.length > 0 ? (
              <ul>
                {filteredEvents.map((event) => (
                  <li key={event.id}>
                    <Card listitem={true}>
                      <figcaption>
                        <div className="buttons">
                          <Button listitem={true} readmore={true}>
                            <Link to={`/event/${event.id}`}>Læs mere</Link>
                          </Button>

                          <Button listitem={true}>
                            <Link to={`/event/buyticket/${event.id}`}>Køb billet</Link>
                          </Button>
                        </div>
                        <div className="list-item">
                          <h5 className="location">{event.stage_name}</h5>
                          <h4 className="date">
                            {new Date(event.startdate).toLocaleDateString("da-DK", { month: "long", day: "numeric" })}
                            &nbsp;-&nbsp;
                            {new Date(event.stopdate).toLocaleDateString("da-DK", { year: "numeric", month: "long", day: "numeric" })}
                          </h4>
                        </div>
                        <div className="title">
                          <h2>{event.title}</h2>
                        </div>
                      </figcaption>
                      <picture>
                        <img src={event.image} alt={event.title} />
                      </picture>
                    </Card>
                  </li>
                ))}
              </ul>
            ) : (
              <ul>
                {events.items.map((ev) => (
                  <li key={ev.id}>
                    <Card listitem={true}>
                      <figcaption>
                        <div className="buttons">
                          <Button listitem={true} readmore={true}>
                            <Link to={`/event/${ev.id}`}>Læs mere</Link>
                          </Button>

                          <Button listitem={true}>
                            <Link to={`/event/buyticket/${ev.id}`}>Køb billet</Link>
                          </Button>
                        </div>
                        <div className="list-item">
                          <h5 className="location">{ev.stage_name}</h5>
                          <h4 className="date">
                            {new Date(ev.startdate).toLocaleDateString("da-DK", { month: "long", day: "numeric" })}
                            &nbsp;-&nbsp;
                            {new Date(ev.stopdate).toLocaleDateString("da-DK", { year: "numeric", month: "long", day: "numeric" })}
                          </h4>
                        </div>
                        <div className="title">
                          <h2>{ev.title}</h2>
                        </div>
                      </figcaption>
                      <picture>
                        <img src={ev.image} alt={ev.title} />
                      </picture>
                    </Card>
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <p>Indlæser..</p>
        )}
      </EventsContainer>
    </Page>
  );
};

export default Events;
