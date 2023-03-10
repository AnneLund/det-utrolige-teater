import React from "react";
import { Card } from "./Card/CardStyled";
import useGetListItemsByEndPoint from "../Hooks/useGetListItemsByEndPoint";

//ForsideEvent efter eget valg

const HighlightedEvent = () => {
  //fetcher event vha en hook
  const { state: events } = useGetListItemsByEndPoint("events");

  return (
    <>
      {events && events.items ? (
        <>
          <Card column={false}>
            <figcaption>
              <div>
                <p className="location">{events.items[1].stage_name}</p>
                <h4 className="date">
                  {new Date(events.items[1].startdate).toLocaleDateString("da-DK", { month: "long", day: "numeric" })}
                  &nbsp;-&nbsp;
                  {new Date(events.items[1].stopdate).toLocaleDateString("da-DK", { year: "numeric", month: "long", day: "numeric" })}
                </h4>
              </div>
              <div>
                <h2>{events.items[1].title}</h2>
                <p className="category">{events.items[1].genre}</p>
              </div>
            </figcaption>
            <picture>
              <img src={events.items[1].image} alt={events.items[1].title} />
            </picture>
          </Card>
        </>
      ) : (
        <p>Indlæser data..</p>
      )}
    </>
  );
};

export default HighlightedEvent;
