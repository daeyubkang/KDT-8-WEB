import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //handleSubmit: 두 개의 함수를 받는데 하나는 유효할 때 실행되는 함수(필수),
  //또다른 하나는 유효하지 않을 때 실행되는 함수(선택)
  const onValid = (data) => {
    console.log("hi", data);
  };

  //   const onInvalid = (error) => {
  //     console.log(error);
  //   };

  //   console.log(watch("password"));
  console.log("errors", errors);

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          {...register("username", {
            required: "이름을 입력하세요",
            minLength: { message: "최소 2글자 이상 작성하세요", value: 2 },
          })}
          placeholder="username"
        />
        {errors.username?.message}
        <br />
        <input
          type="text"
          {...register("email", {
            required: "이메일을 입력하세요",
            validate: {
              useGmail: (value) => {
                return (
                  value.includes("gmail.com") ||
                  "gmail.com으로만 가입이 가능합니다."
                );
              },
            },
          })}
          placeholder="email"
        />
        {errors.email?.message}
        <br />
        <input type="text" {...register("password")} placeholder="password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
