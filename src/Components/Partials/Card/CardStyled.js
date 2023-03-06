import styled from "styled-components";

export const Card = styled.figure`
  width: ${(props) => (props.column ? "20%" : props.listitem ? "50vw" : "50vw")};
  height: ${(props) => (props.listitem ? "20vh" : "auto")};
  display: flex;
  margin: 1em auto;
  justify-content: flex;
  flex-direction: ${(props) => (props.column ? "column-reverse" : props.listitem ? "row-reverse" : "row")};
  border: 1px solid ${(props) => props.theme.colors.secondary};

  picture {
    width: 100%;
  }

  img {
    width: 100%;
    border: 10px solid ${(props) => props.theme.colors.secondary};
    aspect-ratio: 1/1;
    object-fit: cover;
  }

  figcaption {
    text-align: ${(props) => (props.listitem ? "left" : "right")};
    display: flex;
    flex-direction: ${(props) => (props.listitem ? "row-reverse" : "column")};
    justify-content: ${(props) => (props.listitem ? "left" : "end")};
    padding: ${(props) => (props.listitem ? "0" : "1em 2em 0")};
    width: 100%;

    h2 {
      font-size: 2em;
    }

    div {
      padding-bottom: 1em;
      width: 100%;
      :first-child {
        border-bottom: #dfdfdf solid 1px;
      }
    }

    .category {
      text-transform: uppercase;
      display: ${(props) => (props.listitem ? "none" : "block")};
    }

    footer {
      display: flex;
    }
  }
`;
