import React from "react";
import "./display2.css";
import Display3 from "./Display3";

const Display2 = ({ count, setCount }) => {  // Receive count and setCount as props
  return (
    <div className="small-box-2">
      <h2 className="count-display">The Current Value is: {count}</h2>
      <Display3 count={count} setCount={setCount} /> {/* Pass state to Display3 */}
    </div>
  );
};

export default Display2;
