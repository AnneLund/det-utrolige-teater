import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import useGetListItemsByEndPoint from "../../Components/Hooks/useGetListItemsByEndPoint";
import Button from "../../Components/Partials/Buttons/ButtonOne";
import { Card } from "../../Components/Partials/Card/CardStyled";
import { GridContainer } from "../../Styles/GridContainer";

const RandomEvents = () => {
  const { state: events } = useGetListItemsByEndPoint("events");
  const [randomEvents, setRandomEvents] = useState([]);

  //Jeg tjekker om events og events.items eksisterer, inden jeg tilgår det.
  useMemo(() => {
    if (events && events.items) {
      const shuffledEvents = events.items
        .sort(() => 0.5 - Math.random()) // blander objekterne i mit array
        .slice(0, 3); // tager de 3 første i mit array
      setRandomEvents(shuffledEvents);
    }
  }, [events]);

  return (
    <GridContainer>
      {randomEvents.map((event) => (
        <Card key={event.id} column={true}>
          <figcaption>
            <div>
              <h5 className="location">{event.stage_name}</h5>
              <h4 className="date">
                {new Date(event.startdate).toLocaleDateString("da-DK", { month: "long", day: "numeric" })}
                &nbsp;-&nbsp;
                {new Date(event.stopdate).toLocaleDateString("da-DK", { year: "numeric", month: "long", day: "numeric" })}
              </h4>
            </div>
            <div>
              <h2>{event.title}</h2>
              <p className="category"> {event.genre}</p>
            </div>
            <footer>
              <Button readmore={true}>
                <Link to={`/event/${event.id}`}>Læs mere</Link>
              </Button>
              <Button>
                <Link to={`/event/buyticket/${event.id}`}>Køb billet</Link>
              </Button>
            </footer>
          </figcaption>
          <picture>
            <img src={event.image} alt={event.title} />
          </picture>
        </Card>
      ))}
    </GridContainer>
  );
};

export default RandomEvents;
