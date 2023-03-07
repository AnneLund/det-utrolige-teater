import { createGlobalStyle, css } from "styled-components";

export const Globals = createGlobalStyle`${css`
  * {
    list-style-type: none;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  #root {
    width: 100%;
    min-height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    font-family: "Titillium Web", sans-serif;
  }

  img {
    width: 100%;
    display: block;
  }

  h1,
  h2,
  h3 {
    font-family: "Playfair Display", serif;
    font-weight: 100;
    color: ${(props) => props.theme.colors.primary};
  }

  a {
    text-decoration: none;
    color: white;
  }
`}`;
