import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const loginButton = () => {
    console.log(id);
    console.log(pw);

    const login = async () => {
      const res = await axios({
        method: "POST",
        url: "http://localhost:8000/sign/login",
        data: {
          id: id,
          pw: pw,
        },
      });
      return res.data;
    };
    login().then((data) => {
      if (data.result) {
        console.log(data);
        alert("로그인 성공");
        localStorage.setItem("token", data.token);
      } else {
        console.log(data);
        alert("로그인 실패");
      }
    });
  };

  return (
    <div>
      <h1>Login</h1>
      아이디:{" "}
      <input
        type="text"
        placeholder="아이디"
        onChange={(e) => setId(e.target.value)}
      />{" "}
      <br />
      비밀번호:{" "}
      <input
        type="text"
        placeholder="비밀번호"
        onChange={(e) => setPw(e.target.value)}
      />{" "}
      <br />
      <button onClick={loginButton}>로그인</button>
    </div>
  );
};

export default Login;
