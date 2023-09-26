import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const KDT = () => {
  const navi = useNavigate();

  const { userId } = useParams();
  console.log(userId);

  const onClick = () => {
    navi("/");
  };
  return (
    <>
      <div>
        학생의 이름은 <span style={{ color: "blue" }}>{userId}</span> 입니다.
      </div>
      <button onClick={onClick}>이전 페이지</button>
    </>
  );
};

export default KDT;
