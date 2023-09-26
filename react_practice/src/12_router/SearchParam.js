import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const SearchParam = () => {
  const navi = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");
  console.log(searchParams.get("name"));

  const onClick = () => {
    navi("/");
  };
  return (
    <div>
      학생의 이름은 <span style={{ color: "blue" }}>new</span> 입니다.
      <p>
        실제이름은 <span style={{ color: "red" }}>{name}</span>
      </p>
      <button onClick={onClick}>이전 페이지</button>
    </div>
  );
};

export default SearchParam;
