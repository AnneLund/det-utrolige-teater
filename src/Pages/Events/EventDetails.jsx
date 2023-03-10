import React, { useState, useEffect } from "react";
import AppService from "../../Components/Appservices/Appservice";
import { useParams } from "react-router-dom";
import Button from "../../Components/Partials/Buttons/ButtonOne";
import { Page } from "../../Layout/Page";
import Rating from "../../Components/Partials/Rating";
import { Gallery } from "../../Styles/Gallery";
import Reviews from "../../Components/Partials/Reviews/Reviews";
import { DetailCard } from "./DetailCard";
import useGetListItemById from "../../Components/Hooks/useGetListItemById";

const EventDetails = () => {
  const { id } = useParams();
  const { state: events } = useGetListItemById("events", id);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const renderComments = async () => {
      try {
        const response = await AppService.GetList("reviews");
        if (response.data) {
          // Filtrerer reviews med det samme event_id
          const filteredReviews = response.data.items.filter((review) => review.event_id === id);
          // Sorterer i datoer, så det er de sidste nye kommentarer der fetches
          filteredReviews.sort((a, b) => new Date(b.created) - new Date(a.created));
          setReviews(filteredReviews.slice(0, 3));
        }
      } catch (error) {
        console.error(error);
      }
    };

    renderComments();
  }, [id]);

  return (
    <Page title="Event - detaljer">
      {events && events.item ? (
        <DetailCard>
          <picture>
            <img src={events.item.image} alt={events.item.title} />
          </picture>
          <figcaption>
            <div className="info">
              <div>
                <h4 className="location">{events.item.stage_name}</h4>
                <p className="date">Lorem ipsum dolor sit amet.</p>
              </div>

              <h5>Billetpris: 299 DKK</h5>
            </div>

            <header>
              <div>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <h5>Lorem ipsum dolor sit amet.</h5>
              </div>

              <Button>Køb billet</Button>
            </header>

            <div>{events.item.description}</div>

            <h5>Medvirkende</h5>
            <Gallery>
              <figure>
                <picture>
                  <img src="https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg?ssl=1" alt="" />
                </picture>
                <figcaption>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, amet!</figcaption>
              </figure>
              <figure>
                <picture>
                  <img src="https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg?ssl=1" alt="" />
                </picture>
                <figcaption>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, amet!</figcaption>
              </figure>
              <figure>
                <picture>
                  <img src="https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg?ssl=1" alt="" />
                </picture>
                <figcaption>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, amet!</figcaption>
              </figure>
              <figure>
                <picture>
                  <img src="https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg?ssl=1" alt="" />
                </picture>
                <figcaption>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, amet!</figcaption>
              </figure>
            </Gallery>
            <h5 className="underline">Anmeldelser</h5>

            {reviews ? (
              <>
                {reviews.map((rew) => (
                  <figure key={rew.id}>
                    <Rating value={rew.num_stars} />
                    <p>{rew.created}</p>
                    <h4>{rew.user.firstname}</h4>
                    <p>{rew.comment}</p>
                  </figure>
                ))}
              </>
            ) : (
              <p>Indlæser..</p>
            )}
          </figcaption>
          <Reviews eventID={events} />
        </DetailCard>
      ) : (
        <p>Indlæser data..</p>
      )}
    </Page>
  );
};

export default EventDetails;
