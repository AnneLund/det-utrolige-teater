import React, { useState } from "react";
import styled from "styled-components";
import { IoMdHeartEmpty } from "react-icons/io";

const Like = styled.div`
  .liked {
    color: red;
  }
`;

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <Like>
      <span className={`heart ${liked ? "liked" : ""}`} onClick={handleClick}>
        <IoMdHeartEmpty size={20} />
      </span>
    </Like>
  );
};

export default LikeButton;
