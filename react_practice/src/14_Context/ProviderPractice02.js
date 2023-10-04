import { useState } from "react";
import MyContextPractice02 from "./store/context-practice02";

export default function ProviderPractice02(props) {
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);

  return (
    <MyContextPractice02.Provider value={{ price, setPrice, name, setName }}>
      {props.children}
    </MyContextPractice02.Provider>
  );
}
