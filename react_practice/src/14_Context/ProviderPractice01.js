import { useState } from "react";
import MyContextPractice01 from "./store/context-practice01";

export default function ProviderPractice01(props) {
  const [language, setLanguage] = useState("korean");
  const [theme, setTheme] = useState("light");

  return (
    <MyContextPractice01.Provider
      value={{ theme, setTheme, language, setLanguage }}
    >
      {props.children}
    </MyContextPractice01.Provider>
  );
}
