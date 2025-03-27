import React, { useState } from "react";
import "./app.css"; // ✅ Import the CSS file
import Display from "./display";
import Display2 from "./Display2";

const App = () => {
  const [count, setCount] = useState(0); // Shared state

  return (
    <div className="big-box"> {/* ✅ Add big-box class */}
      <div>
        <Display count={count} />  
        <Display2 count={count} setCount={setCount} /> 
      </div>
    </div>
  );
};

export default App;
