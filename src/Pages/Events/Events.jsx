import React from "react";
import { Page } from "../../Layout/Page";
import HighlightedEvent from "../../Components/Partials/HighlightedEvent";
import styled from "styled-components";
import { Card } from "../../Components/Partials/Card/CardStyled";
import Button from "../../Components/Partials/Buttons/ButtonOne";

const EventContainer = styled.article`
  width: 70vw;
  margin: 0 auto;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 4em;
    }
    select {
      width: 160px;
      height: 40px;
    }
  }
`;

const Events = () => {
  return (
    <Page title="Forestillinger og events">
      <HighlightedEvent />
      <EventContainer>
        <header>
          <select>
            <option>Filter</option>
          </select>
          <h2>Oversigt</h2>
        </header>
        <ul>
          <li>
            <Card listitem={true}>
              <figcaption>
                <Button listitem={true} readmore={true}>
                  Læs mere
                </Button>
                <Button listitem={true}>Køb billet</Button>
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
          </li>
        </ul>
      </EventContainer>
    </Page>
  );
};

export default Events;
