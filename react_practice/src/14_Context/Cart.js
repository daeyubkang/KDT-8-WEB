import React, { useContext } from "react";
import MyContextPractice02 from "./store/context-practice02";

const Cart = () => {
  const value = useContext(MyContextPractice02);

  const removeButton = (index) => {
    const copyName = value.name.filter((it, idx) => idx !== index);
    value.setName(copyName);

    const copyPrice = value.price.filter((it, idx) => idx !== index);
    value.setPrice(copyPrice);
  };
  let totalPrice = 0;

  return (
    <div>
      <h2>장바구니</h2>
      <ul>
        {value.name.map((item, index) => {
          totalPrice += Number(value.price[index]);
          return (
            <li key={item}>
              이름: {item} 가격: {value.price[index]}{" "}
              <button onClick={(e) => removeButton(index)}>삭제</button>
            </li>
          );
        })}
      </ul>
      <h2>총 가격: {totalPrice}</h2>
    </div>
  );
};

export default Cart;
