import React, { useState } from "react";
import "./UseState.css";

const UseState = () => {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div className="center_div">
        <p>{count}</p>
        <div className="button2" onClick={()=>{setCount(count+1)}} >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          className="button2" onClick={()=> {count > 0 ? setCount(count - 1) : setCount(0)}}
          >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseState;