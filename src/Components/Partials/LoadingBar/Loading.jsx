import React, { useState, useEffect } from "react";

const LoadingBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress === 100) {
          clearInterval(intervalId);
        }
        return newProgress;
      });
    }, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ width: "100%", height: "20px", backgroundColor: "#ddd" }}>
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: "blue",
        }}
      />
    </div>
  );
};

export default LoadingBar;
