import React from "react";
import "./display.css";

const Display = ({ count }) => {  // Receive count as a prop
  return (
    <div className="small-box">
      <h2>{count}</h2> {/* Show the count */}
    </div>
  );
};

export default Display;
