import styled from "styled-components";

export const Card = styled.figure`
  width: 100%;
  display: flex;
  margin: 0 auto;
  height: auto;
  justify-content: space-between;
  flex-direction: ${(props) => (props.column ? "column-reverse" : props.listitem ? "row-reverse" : "row")};
  border: 1px solid ${(props) => props.theme.colors.secondary};

  picture {
    position: relative;
    width: ${(props) => (props.listitem ? "100px" : "100%")};
    @media (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
      width: 100%;
    }
  }
  img {
    border: ${(props) => (props.listitem ? `3px solid #AD7A51` : `10px solid #AD7A51`)};
    object-fit: cover;
    object-position: center;
    height: ${(props) => (props.listitem ? "100px" : "100%")};
    aspect-ratio: ${(props) => (props.column ? "1/1" : "2.5/1")};
  }

  figcaption {
    text-align: ${(props) => (props.listitem ? "left" : "right")};
    display: flex;
    align-items: center;
    flex-direction: ${(props) => (props.listitem ? "row-reverse" : "column")};
    justify-content: ${(props) => (props.column ? "space-between" : "center")};
    padding: ${(props) => (props.listitem ? "0.5em" : "1em 2em 0")};
    width: 100%;

    h2 {
      font-size: ${(props) => (props.listitem ? "2.3vw" : "3vw")};

      @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
        font-size: 5vw;
      }
    }

    .date,
    .location {
      font-size: 1em;
      @media (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
        font-size: 2vw;
      }

      @media (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
        font-size: 3vw;
      }
    }

    div {
      width: 100%;
      height: ${(props) => (props.listitem ? "80px" : "150px")};
      display: flex;
      flex-direction: column;
      justify-content: ${(props) => (props.column === false ? "end" : "top")};

      :first-child {
        height: 60px;
        border-bottom: ${(props) => (props.listitem ? "none" : "#dfdfdf solid 1px")};
      }

      :nth-child(2) {
        height: ${(props) => (props.listitem ? "60px" : "160px")};
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }

    .list-item {
      border-left: ${(props) => (props.listitem ? "#dfdfdf solid 1px" : "none")};
      padding-left: 1.5em;
    }

    .buttons {
      margin-top: 1em;
      display: flex;
      justify-content: flex-end;
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
      margin: 1em 0;
    }

    @media (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
      flex-direction: ${(props) => (props.listitem ? "column-reverse" : "column")};
      text-align: right;
    }
  }

  @media (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
    flex-direction: column-reverse;
    height: auto;
  }
`;
