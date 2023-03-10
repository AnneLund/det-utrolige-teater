import styled from "styled-components";

export const MyForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  gap: 0.5em;
  position: relative;
  margin-bottom: 1em;

  .form-element {
    display: flex;
    justify-content: space-between;

    span {
      margin: 0;
    }

    label {
      text-transform: uppercase;
      width: 220px;
      text-align: right;
    }

    input {
      width: 100%;
      margin-left: 1em;
    }

    @media (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
      flex-direction: column;

      label {
        width: 100%;
        text-align: left;
      }

      input {
        margin-left: 0;
      }
    }
  }

  .seats {
    height: 400px;
    width: 700px;
    border: none;
    object-fit: contain;
    aspect-ratio: 1/2;
    margin: 0 auto;
  }
`;
