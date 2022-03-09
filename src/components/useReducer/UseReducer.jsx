import React, { useEffect, useReducer, useState } from "react";
import "./UseReducer.css";

const reducer = (state, actions)=>{
     if(actions.type === "INCR"){
         state = state + 1;
     }
     if(state > 0 && actions.type === "DECR"){
         state = state -1;
     }
     return state;
}
const UseReducer = () => {
//   const [count, setCount] = useState(0)
     const initialValue = 0;
     const [state, dispatch] = useReducer(reducer, initialValue)
  useEffect(()=>{
     document.title = "useReducer"   
  },[])
  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div className="button2" onClick={()=>dispatch({type:"INCR"})} >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          className="button2" onClick={()=>dispatch({type:"DECR"})}
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

export default UseReducer;