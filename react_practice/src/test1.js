import { Component } from "react";

//class형 컴포넌트
//class 컴포넌트형 extends Component

class Test1 extends Component {
  //클래스형 컴포넌트에서는 render 함수는 필수
  render() {
    const name = "강대엽";
    const my_style = {
      backgroundColor: "blue",
      color: "orange",
      fontSize: "40px",
      padding: "12px",
    };

    return (
      <>
        <div style={my_style}>{name}</div>
      </>
    );
  }
}

export default Test1;
