/////redux를 이용한 코드
import { createStore } from "redux";

// const add = document.querySelector("#add");
// const minus = document.querySelector("#minus");
// const num = document.querySelector("#num");

// const ADD = "ADD";
// const MINUS = "MINUS";

const todoInput = document.querySelector("#todoInput");
const addButton = document.querySelector("#addButton");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

//리듀서는 데이터를 수정해주는 함수
// const countReducer = (state = 0, action) => {
//   console.log(state, action);
//   switch (action.type) {
//     case ADD:
//       return state + 1;
//     case MINUS:
//       return state - 1;
//     default:
//       return state;
//   }
// };

const todoReducer = (state = [], action) => {
  console.log(state, action);
  switch (action.type) {
    case ADD_TODO:
      const newState = [...state, todoInput.value];
      state = newState;
      return state;
    case DELETE_TODO:
      const delState = state.filter(
        (item, index) => Number(index) !== Number(buttonTarget)
      );
      state = delState;
      return state;
    default:
      return state;
  }
};

//store는 데이터를 넣는 곳
//createStore: store 생성, 리듀서 함수 필수
// const countStore = createStore(countReducer);
// console.log(countStore);

const todoStore = createStore(todoReducer);
console.log(todoStore);

//subscribe()는 함수를 반환하며 데이터와 저장소가 변경될 때마다 함수를 실행
// countStore.subscribe(() => {
//   num.textContent = countStore.getState();
// });

todoStore.subscribe(() => {
  console.log(todoStore.getState());
  console.log(todoInput.value);
  ul.innerHTML = "";
  todoStore.getState().map((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item} <button class="delbutton${index}"  value="${index}">DEL</button>`;
    ul.appendChild(li);

    const delButton = document.querySelector(`.delbutton${index}`);
    delButton.addEventListener("click", (e) => {
      buttonTarget = e.target.value;
      todoStore.dispatch({ type: DELETE_TODO });
    });
  });
});

addButton.addEventListener("click", () => {
  todoStore.dispatch({ type: ADD_TODO });
  todoInput.value = "";
});

let buttonTarget = "";

// add.addEventListener("click", () => {
//   countStore.dispatch({ type: ADD });
// });

// minus.addEventListener("click", () => {
//   countStore.dispatch({ type: MINUS });
// });

//getState()는 createStore로 생성된 저장소에서 최신상태의 값을 반환할때 쓰는 메소드
// console.log(countStore.getState());

/////자바스크립트를 이용한 +1, -1 코드
// let count = 0;

// add.addEventListener("click", () => {
//   count = count + 1;
//   console.log(count);
//   num.textContent = count;
// });

// minus.addEventListener("click", () => {
//   count = count - 1;
//   console.log(count);
//   num.textContent = count;
// });
