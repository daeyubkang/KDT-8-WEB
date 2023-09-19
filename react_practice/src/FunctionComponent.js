import React from "react";
import PropTypes from "prop-types";
import "./App.css";

function FunctionComponent(props) {
  //   const myClass = "kdt8";
  return (
    <>
      <div id="div1">
        <h1 id="bookTitle">이번주 베스트셀러</h1>
        <img
          id="bookImage"
          src="https://image.yes24.com/goods/93513663/XL"
          alt=""
        />
        <h2>{props.title}</h2>
        <h4 id="bookH4">저자: {props.author}</h4>
        <h4 id="bookH4">판매가: {props.price}</h4>
        <h4 id="bookH4">구분: {props.type}</h4>
      </div>
    </>
  );
}

FunctionComponent.defaultProps = {
  name: "kdt8",
  age: 10,
};

FunctionComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default FunctionComponent;
