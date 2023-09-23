import React, { useCallback, useState } from "react";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
      <ChildComponent onClick={incrementCount}></ChildComponent>
      <p>Count: {count}</p>
    </div>
  );
};

function ChildComponent({ onClick }) {
  console.log("ChildComponent render");
  return <button onClick={onClick}>Increment Click</button>;
}

export default UseCallback;
