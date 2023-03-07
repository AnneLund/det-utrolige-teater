import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Partials/Buttons/ButtonOne";
import styled from "styled-components";
import { Page } from "../../Layout/Page";
import Rating from "../../Components/Partials/Rating";
import { Gallery } from "../../Styles/Gallery";
import Reviews from "../../Components/Partials/Reviews/Reviews";
import { DetailCard } from "./DetailCard";

const EventDetails = () => {
  return (
    <Page>
      <DetailCard>
        <picture>
          <img src="https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg?ssl=1" alt="" />
        </picture>
        <figcaption>
          <div className="info">
            <div>
              <h4 className="location">Lorem ipsumrepellat sapiente</h4>
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

          <pre>Lorem ipsum dolor sit amet cotenetur cumque sequi assumenda deleniti. Facilis, reiciendis?</pre>

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

          <figure>
            <Rating />
            <p>Dato</p>
            <h4>Navn</h4>
            <pre>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, repudiandae!</pre>
          </figure>
        </figcaption>
        <Reviews />
      </DetailCard>
    </Page>
  );
};

export default EventDetails;
