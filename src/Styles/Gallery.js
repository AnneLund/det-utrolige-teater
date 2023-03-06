import styled from "styled-components";

export const Gallery = styled.div`
  margin: 0 auto;
  padding: 5em 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: repeat(minmax(200px, 300px));
  gap: 0.5em;

  picture {
    img {
      width: 100%;
      object-fit: cover;
      aspect-ratio: 1/1;
    }
  }
`;
