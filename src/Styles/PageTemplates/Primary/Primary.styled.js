import styled from "styled-components";

const All = `
display: flex;
align-items: center;
justify-content: center;

`;

export const StyledPrimary = styled.main`
  width: 100%;
  margin: 0 auto;
  display: grid;
  padding: 2em;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "A"
    "B";

  @media all and (min-width: ${(props) => props.theme.breakPoints.tablet.value}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      "A A"
      "B B";
  }

  @media all and (min-width: ${(props) => props.theme.breakPoints.desktop.value}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
      "A A A A"
      "B B B B";
  }

  > :nth-child(1) {
    grid-area: A;
    ${All};
  }

  > :nth-child(2) {
    grid-area: B;
    ${All};
  }
`;
