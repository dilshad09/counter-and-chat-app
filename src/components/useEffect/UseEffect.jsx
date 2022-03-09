import React, { useEffect, useState } from "react";
import "./UseEffect.css";

const UseEffect = () => {
  const [count, setCount] = useState(0)
  useEffect(()=>{
      document.title = (`chats(${count})`)
  })
  
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
      </div>
    </>
  );
};

export default UseEffect;