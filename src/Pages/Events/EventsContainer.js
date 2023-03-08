import styled from "styled-components";

export const EventsContainer = styled.article`
  margin: 3em auto;
  width: 75vw;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 3em 0;
    h2 {
      font-size: 4em;
      @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
        font-size: 8vw;
        margin: 0 1em;
      }
    }
    select {
      width: 250px;
      height: 50px;
      font-size: 1.5em;
      border: 1px solid ${(props) => props.theme.colors.secondary};
      box-shadow: #000000 0.5px 0.5px 0.5px 0.5px;
      border-radius: 5px;
    }

    @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
      flex-direction: column-reverse;
      gap: 2em;
    }
  }

  li {
    margin-bottom: 2em;
  }
`;
