import styled from "styled-components";

export const PageContainer = styled.section`
  width: 75vw;
  margin: 3em auto;
  padding: 2em 0;

  h1 {
    font-size: 4vw;
    margin: 1em 0;
  }

  .border {
    border: 1px solid ${(props) => props.theme.colors.secondary};
    padding: 1em;
  }

  .button {
    float: right;
    display: flex;
    justify-content: flex-end;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
    width: 100%;
    padding: 2em;

    h1 {
      font-size: 9vw;
    }
  }
`;
