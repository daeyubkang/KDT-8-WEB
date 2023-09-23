import React, { useReducer } from "react";
import LoginForm from "./LoginForm";
import Reducer from "./Reducer";

const LoginPage = () => {
  const [state, dispatch] = useReducer(Reducer, {
    isLogin: false,
    message: "",
  });
  return (
    <>
      {state.isLogin ? (
        <>
          <h1>환영합니다.</h1>
          <button onClick={() => dispatch({ type: "LOGOUT" })}>로그아웃</button>
        </>
      ) : (
        <LoginForm state={state} dispatch={dispatch} />
      )}
    </>
  );
};

export default LoginPage;
