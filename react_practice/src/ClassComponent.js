import { Component } from "react";
import PropTypes from "prop-types";

//class형 컴포넌트
//class 컴포넌트형 extends Component
class ClassComponent extends Component {
  //클래스형 컴포넌트에서는 render 함수는 필수
  render() {
    const { name } = this.props;

    return (
      <>
        <h1>
          내가 좋아하는 음식은{" "}
          <span style={{ color: "red" }}>{this.props.food}</span>
        </h1>

        <h4>{name}</h4>
      </>
    );
  }
}

ClassComponent.defaultProps = {
  food: "음식 기본값",
};

ClassComponent.propTypes = {
  name: PropTypes.number,
};

export default ClassComponent;
