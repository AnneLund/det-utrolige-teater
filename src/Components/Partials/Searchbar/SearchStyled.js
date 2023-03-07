import styled from "styled-components";

export const SearchBarStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  div {
    display: flex;
    position: relative;
    width: 70%;
    margin-left: auto;

    input {
      padding: 0.5em;
      width: 100%;
      border: black solid 1px;

      @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
        font-size: 1em;
      }

      @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile.value}) {
        font-size: 1.7em;
      }
    }

    //Søge-ikon
    button {
      display: flex;
      border: none;
      background-color: white;
      justify-content: center;
      align-items: center;
      padding: 0.1em;
      position: absolute;
      right: 4px;
      top: 5px;
    }

    @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
      justify-content: center;
      width: 50%;
      margin: 0 auto;
    }
  }

  ul {
    position: absolute;
    z-index: 2;
    top: 3em;
    padding: 1em;
    background-color: ${(props) => props.theme.colors.figureBackground};
    li {
      margin: 0.5em auto;
      color: black;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile.value}) {
    display: none;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;
