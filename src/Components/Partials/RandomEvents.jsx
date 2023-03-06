import React from "react";
import styled from "styled-components";
import Button from "./Buttons/ButtonOne";
import ButtonTwo from "./Buttons/ButtonTwo";
import { Card } from "./Card/CardStyled";

const EventsContainer = styled.section``;

const RandomEvents = () => {
  return (
    <EventsContainer>
      <Card column={true}>
        <figcaption>
          <div>
            <p className="location">Lorem ipsumrepellat sapiente</p>
            <h4 className="date">Lorem ipsum dolor sit amet.</h4>
          </div>
          <div>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p className="category">Lorem ipsum dolor sit amet.</p>
          </div>
          <footer>
            <Button>Læs mere</Button>
            <ButtonTwo>Køb billet</ButtonTwo>
          </footer>
        </figcaption>
        <img src="https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg?ssl=1" alt="" />
      </Card>
    </EventsContainer>
  );
};

export default RandomEvents;
