import React from "react";
import "./display3.css";

const Display3 = ({ count, setCount }) => {
  return (
    <div className="small-box-3">
      <button onClick={() => setCount(count - 1)} className="btn">-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)} className="btn">+</button>
    </div>
  );
};

export default Display3;
