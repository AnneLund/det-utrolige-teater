import React, { useState } from "react";
import styled from "styled-components";

const Stars = styled.div`
  span {
    cursor: pointer;
    font-size: 30px;
    color: #ccc;
  }

  .filled {
    color: #ffbf00;
  }
`;

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
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

  return (
    <div>
      <Stars>{renderStars()}</Stars>
      {/* <p>You rated this item: {rating} stars</p> */}
    </div>
  );
};

export default Rating;
