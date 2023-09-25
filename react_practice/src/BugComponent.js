import React from "react";
// import "./Bug.css";

function BugComponent() {
  return (
    <>
      <div className="parent">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
        <div className="circle circle5">
          <div className="eye1"></div>
          <div className="eye2"></div>
        </div>
        <img src="../public/logo192.png" alt="" />
      </div>
    </>
  );
}

export default BugComponent;
