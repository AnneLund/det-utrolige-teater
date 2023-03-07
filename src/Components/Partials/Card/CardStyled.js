import styled from "styled-components";

export const Card = styled.figure`
  height: ${(props) => (props.listitem ? "20vh" : "auto")};
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  flex-direction: ${(props) => (props.column ? "column-reverse" : props.listitem ? "row-reverse" : "row")};
  border: 1px solid ${(props) => props.theme.colors.secondary};

  img {
    width: 100%;
    height: 100%;
    border: 10px solid ${(props) => props.theme.colors.secondary};
    object-fit: cover;
    aspect-ratio: ${(props) => (props.column ? "1/1" : "2/1")};
  }

  figcaption {
    text-align: ${(props) => (props.listitem ? "left" : "right")};
    display: flex;
    align-items: center;
    flex-direction: ${(props) => (props.listitem ? "row-reverse" : "column")};
    justify-content: ${(props) => (props.listitem ? "left" : "end")};
    padding: ${(props) => (props.listitem ? "0.5em" : "1em 2em 0")};
    width: 100%;

    h2 {
      font-size: 2vw;
      @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
        font-size: 3vw;
      }
    }

    div {
      padding-bottom: 1em;
      width: 100%;
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: ${(props) => (props.column === false ? "end" : "center")};

      :first-child {
        border-bottom: ${(props) => (props.listitem ? "none" : "#dfdfdf solid 1px")};
      }
    }

    .list-item {
      border-left: ${(props) => (props.listitem ? "#dfdfdf solid 1px" : "none")};
      padding-left: 1.5em;
    }

    .buttons {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .category {
      text-transform: uppercase;
      display: ${(props) => (props.listitem ? "none" : "block")};
    }

    footer {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      margin-bottom: 1em;
    }

    @media (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
      flex-direction: ${(props) => (props.listitem ? "column-reverse" : "column")};
      text-align: center;
    }
  }

  @media (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
    flex-direction: ${(props) => (props.listitem ? "column-reverse" : "column")};
    height: auto;
  }
`;
