import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Practice01 = () => {
  //useNavigate(): Link 컴포넌트를 사용하지 않고 사용자를 어딘가로 이동시키는 기능
  const navi = useNavigate();
  const onClick = () => {
    navi("redirect");
  };

  //Link: 유저가 클릭
  return (
    <div style={{ display: "flex" }}>
      <Link to="/">
        <h2>ReactRouter 실습</h2>
      </Link>
      <nav>
        <ul style={{ display: "flex" }}>
          <li style={{ margin: "4px", marginLeft: "30px" }}>
            <Link to="/student/kdt">학생KDT</Link>
          </li>
          <li style={{ margin: "4px", marginLeft: "30px" }}>
            <Link to="/student/codingon">코딩온</Link>
          </li>
          <li style={{ margin: "4px", marginLeft: "30px" }}>
            <Link to="/student/new?name=kdt3rd">searchParams</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Practice01;
