import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleIncrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Counter;
