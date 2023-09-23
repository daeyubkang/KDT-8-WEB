import React, { Component } from "react";

class refPractice01 extends Component {
  handleFocus = () => {
    this.myInput.focus();
  };

  render() {
    return (
      <div>
        <p>(클래스형 컴포넌트) 버튼 클릭 시 input에 focus 처리</p>

        <input ref={(ref) => (this.myInput = ref)} type="text" />
        <button onClick={this.handleFocus}>focus</button>
      </div>
    );
  }
}

export default refPractice01;
