import React from "react";
import Button from "../../Components/Partials/Buttons/ButtonOne";
import { Page } from "../../Layout/Page";
import { ActorCard } from "./ActorCard";
import Actors from "./Actors";

const ActorDetails = () => {
  return (
    <>
      <Page title="Skuespiller - detaljer">
        <h1>Skuespillere</h1>
        <ActorCard>
          <picture>
            <img src="https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg?ssl=1" alt="" />
          </picture>
          <figcaption>
            <h4>NAVN</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorem ullam quisquam accusantium numquam esse? Quaerat, laudantium?
              Culpa, ratione quod. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non culpa numquam harum nostrum impedit veniam fugiat
              suscipit eos repellendus laboriosam.
            </p>
          </figcaption>
        </ActorCard>
        <div className="button">
          <Button secondary={true}>Alle skuespillere</Button>
        </div>
      </Page>
    </>
  );
};

export default ActorDetails;
