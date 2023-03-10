import styled from "styled-components";

export const CounterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1em;
  width: 100%;

  button {
    background-color: #dedede;
  }

  input,
  button {
    width: 50px;
    height: 40px;
    text-align: center;
    border: none;
  }

  footer {
    h4 {
      font-weight: 600;
      margin-bottom: -5px;
    }
  }

  .amount {
    font-size: 1.5em;
    margin: 1em;
  }

  @media (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
    flex-direction: column;
  }
`;
