import React, { useState } from "react";
import styled from "styled-components";

const Stars = styled.span`
  span {
    cursor: pointer;
    font-size: 30px;
    color: #ccc;
  }

  .filled {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Rating = ({ onRatingChange, value: initialValue, numStars }) => {
  const [rating, setRating] = useState(initialValue || 0);

  const handleClick = (value) => {
    setRating(value);
    onRatingChange(value); // Call the callback function with the rating value
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "filled" : "empty"} onClick={() => handleClick(i)}>
          ★
        </span>
      );
    }
    return stars;
  };

  return <Stars>{renderStars()}</Stars>;
};

export default Rating;
