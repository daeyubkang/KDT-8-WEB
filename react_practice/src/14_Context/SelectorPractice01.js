import React, { useContext } from "react";
import MyContextPractice01 from "./store/context-practice01";

const SelectorPractice01 = () => {
  const value = useContext(MyContextPractice01);

  const themeChange = (e) => {
    value.setTheme(e.target.value);
  };

  return (
    <div>
      <h2
        style={{
          backgroundColor: value.theme === "dark" ? "black" : "white",
          color: value.theme === "dark" ? "white" : "black",
        }}
      >
        현재 선택된 테마: {value.theme}
      </h2>
      <select value={value.theme} onChange={themeChange}>
        <option id="light" value="light">
          light
        </option>
        <option id="dark" value="dark">
          dark
        </option>
      </select>

      <h2>현재 선택된 언어: {value.language}</h2>
      <select
        value={value.language}
        onChange={(e) => value.setLanguage(e.target.value)}
      >
        <option value="Korean">Korean</option>
        <option value="English">English</option>
      </select>
    </div>
  );
};

export default SelectorPractice01;
