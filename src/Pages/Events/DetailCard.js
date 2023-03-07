import styled from "styled-components";

export const DetailCard = styled.figure`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.colors.secondary};

  picture {
    width: 100%;
  }

  img {
    border: 10px solid ${(props) => props.theme.colors.secondary};
    object-fit: cover;
    aspect-ratio: ${(props) => (props.column ? "1/1" : "2/1")};
  }

  figcaption {
    padding: 1em 2em 0;
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h5 {
    font-weight: 100;
    font-size: 1.5em;
    text-transform: uppercase;
    margin: 0.5em 0;
  }

  .underline {
    border-bottom: 1px solid #dfdfdf;
  }

  header {
    display: flex;
    justify-content: space-between;
    margin: 1em 0;

    h2 {
      font-size: 2em;
    }
  }

  h4 {
    text-transform: uppercase;
  }

  pre {
    margin: 1em 0;
    color: ${(props) => props.theme.colors.primary};
  }
`;
