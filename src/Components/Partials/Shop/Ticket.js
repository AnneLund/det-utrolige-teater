import styled from "styled-components";

export const Ticket = styled.figure`
  display: flex;
  margin: 1em auto;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.colors.secondary};

  picture {
    width: 50%;

    @media (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
      width: 100%;
    }
  }

  img {
    border: 10px solid ${(props) => props.theme.colors.secondary};
    object-fit: cover;
    aspect-ratio: 1/2;
  }

  figcaption {
    width: 100%;
    padding: 0 1em;

    header {
      border-bottom: 1px solid #dfdfdf;
      text-align: end;
      height: 12vh;
    }

    .location {
      text-align: end;
      padding: 2em 0;
    }

    @media (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
      flex-direction: column;
      text-align: center;
    }
  }

  article {
    margin: 1em 0;
    padding: 1em 0;
  }
  footer {
    margin: 2em 0;
    h4 {
      font-weight: 100;
    }
  }

  @media (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
    flex-direction: column;
    height: auto;

    h1 {
      font-size: 7vw;
    }
  }
`;
