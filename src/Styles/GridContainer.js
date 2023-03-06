import styled from "styled-components";

export const GridContainer = styled.article`
  padding: 1em;
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  img {
    object-fit: cover;
    aspect-ratio: 1/1;
  }
`;
