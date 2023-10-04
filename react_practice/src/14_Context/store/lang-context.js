import { createContext } from "react";

//Context 생성
//Provider와 Consumer 두 개의 리액트 컴포넌트를 반환
const MyContext = createContext({
  language: "ko",
  setLanguage: () => {},
});

export default MyContext;
