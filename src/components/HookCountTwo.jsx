import React, { useState } from "react";

const HookCountTwo = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);


  const increment5 = () => {
    for(let i = 0; i < 5; i++) {
        setCount ((prevCount) => prevCount + 1)
    }
  }
  return (
    <div className="flex flex-col gap-5">
      <div>Count: {count}</div>
      <div className="flex flex-row gap-5">
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() =>  setCount ((prevCount) => prevCount + 1)}>Increment</button>
        <button onClick={() =>  setCount ((prevCount) => prevCount - 1)}>Decrement</button>
        <button onClick={increment5}>Increment 5</button>
      </div>
    </div>
  );
};

export default HookCountTwo;
