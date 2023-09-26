import React from "react";
import { useNavigate } from "react-router-dom";

const Codingon = () => {
  const navi = useNavigate();

  const onClick = () => {
    navi("/");
  };
  return (
    <>
      <div>
        학생의 이름은 <span style={{ color: "blue" }}>codingon</span>
      </div>
      <button onClick={onClick}>이전 페이지</button>
    </>
  );
};

export default Codingon;
