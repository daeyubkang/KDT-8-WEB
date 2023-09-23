import React, { Component } from "react";

class refPractice02 extends Component {
  myInput = React.createRef();
  handleFocus = () => {
    this.myInput.current.focus();
  };

  render() {
    return (
      <div>
        <p>(클래스형 컴포넌트) 버튼 클릭 시 input에 focus 처리</p>

        <input ref={this.myInput} type="text" />
        <button onClick={this.handleFocus}>focus</button>
      </div>
    );
  }
}

export default refPractice02;
