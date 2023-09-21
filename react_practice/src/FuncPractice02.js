import { useState } from "react";

export default function FuncPractice() {
  let [buttonText, setButtonText] = useState("사라져라");
  let [status, setStatus] = useState(false);

  const buttonC = () => {
    if (status === false) {
      setStatus((status = true));
      setButtonText((buttonText = "보여라"));
    } else {
      setStatus((status = false));
      setButtonText((buttonText = "사라져라"));
    }
  };

  return (
    <div>
      <button onClick={buttonC}>{buttonText}</button>
      <h1>{!status && "안녕하세요"}</h1>
    </div>
  );
}
