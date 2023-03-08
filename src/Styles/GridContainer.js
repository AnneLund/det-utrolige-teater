import styled from "styled-components";

export const GridContainer = styled.article`
  width: 80vw;
  padding: 1em 0;
  margin: 3em auto;
  display: grid;
  gap: 3em;
  justify-content: space-evenly;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  img {
    object-fit: cover;
    aspect-ratio: 1/1;
  }
`;
