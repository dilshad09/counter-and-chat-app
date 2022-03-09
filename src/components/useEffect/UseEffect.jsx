import React, { useState } from "react";
import "./UseEffect.css";

const UseEffect = () => {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div className="center_div">
        <p>{count}</p>
        <div class="button2" onClick={()=>{setCount(count+1)}} >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          class="button2" onClick={()=> {count > 0 ? setCount(count - 1) : setCount(0)}}
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

export default UseEffect;