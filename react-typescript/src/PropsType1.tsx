import React, { useRef, useState } from "react";

interface Props {
  name: string;
  age?: number;
}

const PropsType1: React.FC<Props> = ({ name, age }) => {
  const [count, setCount] = useState<number>(0);
  const myInput = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    myInput.current!.focus();
  };

  const onclick = (e: React.MouseEvent<HTMLElement>) => {};

  return (
    <>
      <h2>
        Hello {name} {age}
      </h2>
      <input ref={myInput} placeholder="myInput" />
      <button onClick={handleFocus}>버튼</button>
      <form action="">
        <button onClick={(e) => onclick(e)}>제출</button>
      </form>
    </>
  );
};

export default PropsType1;

// export default function PropsType1({ name }: Props) {
//   return (
//     <>
//       <h2>Hello {name}</h2>
//     </>
//   );
// }
