import React from "react";
import { useForm } from "react-hook-form";

const FormPractice = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //handleSubmit: 두 개의 함수를 받는데 하나는 유효할 때 실행되는 함수(필수),
  //또다른 하나는 유효하지 않을 때 실행되는 함수(선택)
  const onValid = (data) => {
    console.log("사용자 데이터:", data);
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
            required: "이름은 필수 항목입니다.",
          })}
          placeholder="이름"
        />
        {errors.username?.message}
        <br />
        <input
          type="number"
          {...register("email", {
            min: { message: "0이상의 숫자만 입력 가능합니다.", value: 0 },
          })}
          placeholder="나이"
        />
        {errors.email?.message}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPractice;
