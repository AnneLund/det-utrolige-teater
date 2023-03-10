import styled from "styled-components";

export const AdminStyled = styled.section`
  padding: 0 1em;

  border: 1px solid ${(props) => props.theme.colors.secondary};

  height: 100%;
  article {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 0.1fr);
    grid-template-areas:
      "A A"
      "B B"
      "C C"
      "D D";

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      grid-area: A;
      span {
        display: flex;
        flex-direction: column;
        text-align: right;
        font-size: 0.8em;
      }
    }

    h3 {
      grid-area: B;
      font-size: 2em;
      display: flex;
      align-items: center;
      span {
        padding: 5px;
      }
    }
    .table-wrapper {
      width: 100%;
      table {
        width: 100%;
        overflow-x: auto;
        margin: 1em auto;
        grid-area: C;
        text-transform: uppercase;
        thead,
        tbody {
          text-align: left;
        }
        th,
        td {
          border-bottom: 1px grey solid;
          padding: 0.5em 0;
        }

        button {
          border: none;
          background-color: white;
          margin-right: 1em;
        }

        .red {
          color: green;
          cursor: pointer;
        }

        .delete {
          color: red;
          cursor: pointer;
          float: right;
        }
      }
    }

    #reviews {
      grid-area: D;
    }

    @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto auto;
      padding: 0;
      grid-template-areas:
        "A"
        "B"
        "C"
        "C"
        "D";
    }
  }

  div {
    width: 100%;
    height: 80%;
    padding: 1em;
    margin: 0 1em;

    h4 {
      margin-bottom: 1em;
      font-size: 1em;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;
