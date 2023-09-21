import { Component } from "react";

class Practice01 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      writer: "",
      title: "",
    };
    //바인딩
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    // this.setState({ number: this.state.number + 1 });
    this.setState((prevState) => ({
      color: "빨간색",
      colorStyle: "red",
      hi: "",
    }));
  }

  handleDecrement = () => {
    this.setState((prevState) => ({
      color: "파란색",
      colorStyle: "blue",
    }));
  };

  write12() {
    console.log("qweqwe", this.state.writer.split(" "));
    const table = document.querySelector("tbody");
    table.innerHTML = "";
    this.state.writer.split(" ").map((value, index) => {
      if (index > 0) {
        const tr = document.createElement("tr");
        const num = document.createElement("td");
        num.innerHTML = index;
        const title = document.createElement("td");
        title.innerHTML = this.state.title.split(" ")[index];
        const writer = document.createElement("td");
        writer.innerHTML = this.state.writer.split(" ")[index];
        tr.appendChild(num);
        tr.appendChild(title);
        tr.appendChild(writer);
        table.appendChild(tr);
      }
    });
  }

  write = () => {
    console.log(this.state.writer, this.state.title);
    const wrtie1 = document.querySelector("#write1").value;
    const title1 = document.querySelector("#title1").value;
    // this.setState((prevState) => ({
    //   writer: `${this.state.writer} ${wrtie1}`,
    //   title: `${this.state.title} ${title1}`,
    // }));
    this.setState({
      writer: `${this.state.writer} ${wrtie1}`,
      title: `${this.state.title} ${title1}`,
    });
    console.log(this.state.writer.split(" "));
    setTimeout(() => this.write12(), 5);
  };

  render() {
    return (
      <>
        작성자: <input type="text" placeholder="작성자" id="write1" />
        제목: <input type="text" placeholder="제목" id="title1" />
        <button onClick={this.write}>작성</button>
        <br />
        <select name="" id="">
          qwew
        </select>
        <input type="text" placeholder="검색어" />
        <button>검색</button>
        <table style={{ border: "solid 1px black" }}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>

          <tbody></tbody>
        </table>
        {/* <h1 style={{ color: `${this.state.colorStyle}` }}>
          {this.state.color} 글씨
        </h1> */}
        {/* <button onClick={this.handleIncrement}>사라져라</button>
        <h2>{this.state.hi}</h2> */}
        {/* <button onClick={this.handleDecrement}>파란색</button> */}
      </>
    );
  }
}

export default Practice01;
