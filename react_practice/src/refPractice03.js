import { useRef } from "react";

const RefPractice03 = () => {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <p>(함수형 컴포넌트) 버튼 클릭 시 input에 focus 처리</p>

      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}></button>
    </>
  );
};

export default RefPractice03;
