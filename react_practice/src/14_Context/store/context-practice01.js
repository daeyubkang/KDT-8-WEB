import { createContext } from "react";

const MyContextPractice01 = createContext({
  theme: "light",
  setTheme: () => {},
  language: "Korean",
  setLanguage: () => {},
});

export default MyContextPractice01;
