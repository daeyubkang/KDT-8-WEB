import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const calc = useMemo(() => {
    console.log("calc...");
    for (let i = 0; i < 100000; i++) {}
    return count * 2;
  }, [count]);

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
      <p>Doubled Count: {calc}</p>
    </>
  );
};

export default UseMemo;
