import styled from "styled-components";

export const ReviewsContainer = styled.article`
  background-color: ${(props) => props.theme.colors.secondary};
  color: white;
  padding: 1em;
  margin-top: 1em;

  p {
    font-size: 1.5em;
    display: flex;
    gap: 0.5em;
  }

  span {
    padding: 0.2em 0;
  }
`;
