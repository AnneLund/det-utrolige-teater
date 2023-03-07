import React, { useState } from "react";
import styled from "styled-components";

const Counter = styled.div`
  width: 300px;
  margin-left: auto;
  display: flex;
  align-items: center;

  button {
    font-size: 2em;
    padding: 0.2em 0.5em;
  }
`;

const Count = () => {
  const [count, setCount] = useState(0);

  const addClick = () => {
    setCount(count + 1);
  };

  const removeClick = () => {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <Counter>
      <h5>Antal:</h5>
      <button onClick={addClick}>-</button>
      <p>{count}</p>
      <button onClick={removeClick}>+</button>
      <h4>Pris DKK</h4>
    </Counter>
  );
};

export default Count;
