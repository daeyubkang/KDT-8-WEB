import React, { useState } from "react";

const LoginForm = ({ state, dispatch }) => {
  const [id, setID] = useState("");
  const [pw, setPW] = useState("");
  const userInfo = { realId: "qwe", realPw: "asd" };

  const handleLoginForm = (event) => {
    event.preventDefault();
    const { realId, realPw } = userInfo;
    if (id === realId && pw === realPw) dispatch({ type: "LOGIN_SUCCESS" });
    else if (id !== realId && pw === realPw) dispatch({ type: "MISS_ID" });
    else if (id === realId && pw !== realPw) dispatch({ type: "MISS_PW" });
    else dispatch({ type: "LOGIN_FAILURE" });
  };

  return (
    <div>
      <form action="" onSubmit={handleLoginForm}>
        <label htmlFor="id">ID</label>
        <input id="id" type="text" onChange={(e) => setID(e.target.value)} />
        <br />

        <label htmlFor="pw">PW</label>
        <input
          id="pw"
          type="password"
          onChange={(e) => setPW(e.target.value)}
        />
        <br />

        <button>Login</button>
        <br />

        <p>{state.message}</p>
      </form>
    </div>
  );
};

export default LoginForm;
