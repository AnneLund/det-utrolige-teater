import React from "react";
import { Page } from "../../Layout/Page";
import { GridContainer } from "../../Styles/GridContainer";
import { ActorCard } from "./ActorCard";
import Button from "../../Components/Partials/Buttons/ButtonOne";
import { Link } from "react-router-dom";

const Actors = () => {
  return (
    <Page title="Skuespillere">
      <div className="border">
        <h1>Skuespillere</h1>
        <GridContainer>
          <ActorCard>
            <picture>
              <img src="https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg?ssl=1" alt="" />
            </picture>
            <figcaption>
              <h4>NAVN</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorem ullam quisquam accusantium numquam esse? Quaerat,
                laudantium? Culpa, ratione quod.
              </p>
            </figcaption>
            <footer>
              <Button readmore={true}>
                <Link to={`/actor/${""}`}>Læs mere</Link>
              </Button>
            </footer>
          </ActorCard>
        </GridContainer>
      </div>
    </Page>
  );
};

export default Actors;
