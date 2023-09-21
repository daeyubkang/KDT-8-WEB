import { Component } from "react";

class EventClass extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
    alert("클래스형 컴포넌트");
  }

  handleClick2 = () => {
    console.log("화살표함수", this);
    alert("클래스형 컴포넌트 2번");
  };

  showmessage = (props) => {
    alert(props);
  };
  render() {
    return (
      <>
        <button onClick={this.handleClick}>클릭Class</button>
        <button onClick={this.handleClick2}>클릭Class2</button>
        <button onClick={() => this.showmessage("show message")}>
          Show Message
        </button>
      </>
    );
  }
}

export default EventClass;
