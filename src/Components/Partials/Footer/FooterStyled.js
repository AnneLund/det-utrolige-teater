import styled from "styled-components";

export const MyFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto;
  background-color: ${(props) => props.theme.colors.tertiary};
  padding: 2em;
  color: white;

  h4 {
    text-transform: uppercase;
    font-size: 1.5em;
    margin: 0.5em 0;
  }

  li {
    font-size: 1.3em;
  }

  .map {
    margin-top: 1em;
  }

  div {
    display: flex;
    gap: 1em;
    justify-content: right;
    @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
      justify-content: left;
      margin: 1em 0;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, auto);
    padding: 2em;
  }
`;
