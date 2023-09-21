import { useState } from "react";

export default function FuncPractice04() {
  let [inputValue, setInputValues] = useState({ inputAct: "", allAct: [] });

  const onChange1 = (e) => {
    setInputValues({ ...inputValue, inputAct: e.target.value });
  };
  const onChange2 = (e) => {
    let copy = [...inputValue.allAct];
    if (e.target.checked) {
      copy[e.target.id].doIt = true;
    } else {
      copy[e.target.id].doIt = false;
    }
    setInputValues({
      ...inputValue,
      allAct: copy,
    });
    console.log(inputValue);
  };

  let num = 0;

  const addAct = () => {
    const newAct = {
      actName: inputValue.inputAct,
      doIt: false,
      num: num,
    };
    num += 1;
    setInputValues({
      ...inputValue,
      allAct: [...inputValue.allAct, newAct],
      inputAct: "",
    });
    setTimeout(() => check1(), 50);
  };

  const deleteDoit = () => {
    let copy = [...inputValue.allAct];
    let count = 0;
    inputValue.allAct.map((value, index) => {
      if (value.doIt) {
        const deleteArray = copy.splice(index - count, 1);
        console.log(deleteArray);
        count += 1;
      }
    });
    setInputValues({
      ...inputValue,
      allAct: copy,
    });
  };

  function check1() {
    console.log(inputValue.allAct.length);
    if (inputValue.allAct.length >= 9) {
      alert("할일이 너무 많아요");
    }
  }

  return (
    <>
      <form action="">
        <input
          type="text"
          placeholder="할 일 입력..."
          value={inputValue.inputAct}
          onChange={onChange1}
        />
        <button type="button" onClick={addAct}>
          추가
        </button>
      </form>
      <ul>
        {inputValue.allAct.map((value, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                id={index}
                checked={value.doIt}
                onChange={onChange2}
              />
              {value.actName}
            </li>
          );
        })}
      </ul>
      <button onClick={deleteDoit}>완료된 할일 삭제</button>
    </>
  );
}
