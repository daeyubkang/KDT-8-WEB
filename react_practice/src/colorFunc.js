import { useState } from "react";

export default function ColorFunc() {
  let [color, setColor] = useState("black");
  let [colorText, setColorText] = useState("검정색");

  const redButton = () => {
    setColor((color = "red"));
    setColorText((colorText = "빨간색"));
  };

  const blueButton = () => {
    setColor((color = "blue"));
    setColorText((colorText = "파란색"));
  };

  return (
    <div>
      <h1 style={{ color: color }}>{colorText} 글씨</h1>
      <button onClick={redButton}>빨간색</button>
      <button onClick={blueButton}>파란색</button>
    </div>
  );
}
