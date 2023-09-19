import { Component } from "react";
import coding from "./codingon-logo-wide.png";

//class형 컴포넌트
//class 컴포넌트형 extends Component

class Test2 extends Component {
  //클래스형 컴포넌트에서는 render 함수는 필수
  render() {
    const style = {
      color: "orange",
      fontSize: "40px",
      padding: "12",
      marginTop: "20px",
    };

    return (
      <>
        <div style={style}>
          <h2>안녕하세요</h2>
          <img src={coding} alt="" />
        </div>
      </>
    );
  }
}

export default Test2;
