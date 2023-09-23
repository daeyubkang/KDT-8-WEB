import { useRef } from "react";

const RefPractice04 = () => {
  const idRef = useRef(1);

  const plusIdRef = () => {
    idRef.current += 1;
    console.log(idRef.current);
  };

  return (
    <>
      <p>useRef 로컬변수 사용</p>
      <h2>{idRef.current}</h2>
      <button onClick={plusIdRef}>111</button>
    </>
  );
};

export default RefPractice04;
