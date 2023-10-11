import React from "react";
import { useNavigate } from "react-router-dom";

const NaviBar = () => {
  const navigate = useNavigate();
  const logoButton = () => {
    navigate("/");
  };

  const loginButton = () => {
    navigate("/login");
  };

  const signupButton = () => {
    navigate("/signup");
  };
  return (
    <div>
      <div style={{ width: "100%", height: "10vh", backgroundColor: "beige" }}>
        <span onClick={logoButton} style={{ border: "solid 1px black" }}>
          로고
        </span>
        <button onClick={loginButton}>로그인</button>
        <button onClick={signupButton}>회원가입</button>
      </div>
    </div>
  );
};

export default NaviBar;
