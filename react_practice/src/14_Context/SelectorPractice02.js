import React, { useContext } from "react";
import MyContextPractice02 from "./store/context-practice02";

const SelectorPractice02 = () => {
  const value = useContext(MyContextPractice02);

  const onClick = (e) => {
    const newListName = value.name.concat(e.target.value.split(",")[0]);
    value.setName(newListName);
    const newListPrice = value.price.concat(e.target.value.split(",")[1]);
    value.setPrice(newListPrice);
    console.log("click", value.name, value.price);
    alert("장바구니에 추가 되었습니다.");
  };

  return (
    <div>
      <h1>상품 목록</h1>
      <ul>
        <li id="1">
          상품1: 7000원{" "}
          <button onClick={onClick} value={"상품1,7000"}>
            장바구니에 추가
          </button>
        </li>
        <li id="2">
          상품2: 5000원{" "}
          <button onClick={onClick} value={"상품2,5000"}>
            장바구니에 추가
          </button>
        </li>
        <li id="3">
          상품3: 2000원{" "}
          <button onClick={onClick} value={"상품3,2000"}>
            장바구니에 추가
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SelectorPractice02;
