import styled from "styled-components";

export const Card = styled.figure`
  width: ${(props) => (props.column ? "20vw" : "40vw")};
  display: flex;
  flex-direction: ${(props) => (props.column ? "column-reverse" : "row")};
  border: 1px solid ${(props) => props.theme.colors.secondary};

  img {
    width: ${(props) => (props.column ? "100%" : "50%")};
    border: 10px solid ${(props) => props.theme.colors.secondary};
  }

  figcaption {
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 1em 2em 0;

    h2 {
      font-size: 2em;
    }

    div {
      padding-bottom: 1em;
      :first-child {
        border-bottom: #dfdfdf solid 1px;
      }
    }

    .category {
      text-transform: uppercase;
    }

    footer {
      display: flex;
    }
  }
`;
