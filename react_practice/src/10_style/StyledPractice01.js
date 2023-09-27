import React, { useState } from "react";
import styled from "styled-components";

//스타일 컴포넌트 실습

const _StyledButton = styled.button`
  background-color: ${(props) => (props.isClicked ? "red" : "blue")};
  color: ${(props) => (props.isClicked ? "black" : "white")};
  cursor: pointer;
  padding: 10px;
`;

const StyledPractice01 = () => {
  const [isClicked, setIsClicked] = useState(false);

  const onClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <_StyledButton onClick={onClick} isClicked={isClicked}>
        색상변경
      </_StyledButton>
    </div>
  );
};

export default StyledPractice01;
