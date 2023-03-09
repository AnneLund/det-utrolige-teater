import styled from "styled-components";

export const ActorCard = styled.figure`
  display: grid;
  grid-template-columns: 0.5fr auto 0.5fr;

  figcaption {
    padding: 0 1em;

    h4 {
      font-size: 2em;
      text-transform: uppercase;
      font-weight: 100;
    }

    p {
      color: ${(props) => props.theme.colors.primary};
    }

    .figcaption {
      width: 75%;
    }
  }

  .button {
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
    display: flex;
    flex-direction: column;
  }
`;
