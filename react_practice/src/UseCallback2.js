import React, { useCallback, useState } from "react";

const UseCallback2 = () => {
  const [Text, setText] = useState("");

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onChangeTextCallback = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <div>
      <h1>useCallback test</h1>
      <input onChange={onChangeText} type="text" />
      <div>
        <span>작성한 값: {Text || "없음"}</span>
      </div>
    </div>
  );
};

export default UseCallback2;
