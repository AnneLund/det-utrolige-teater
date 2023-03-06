import React from "react";
import { Card } from "./Card/CardStyled";

const HighlightedEvent = () => {
  return (
    <Card column={false}>
      <figcaption>
        <div>
          <p className="location">Lorem ipsumrepellat sapiente</p>
          <h4 className="date">Lorem ipsum dolor sit amet.</h4>
        </div>
        <div>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p className="category">Lorem ipsum dolor sit amet.</p>
        </div>
      </figcaption>
      <img src="https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg?ssl=1" alt="" />
    </Card>
  );
};

export default HighlightedEvent;
