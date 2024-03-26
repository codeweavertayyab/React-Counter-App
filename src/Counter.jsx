import React, { useState } from "react";
import "./App.css";
export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="countercontainer">
        <h1 className="display-1 mb-5 fw-bold">Counter App By Tayyab</h1>
        <div>
          <button
            className="btn btninc"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            INCREMENT
          </button>
          <button
            className="btn btndec mx-5"
            onClick={() => {
              if(count>0){
                setCount(count-1)
              };
            }}
          >
            DECREMENT
          </button>
          <button
            className="btn btnreset"
            onClick={() => {
              setCount(0);
            }}
          >
            RESET
          </button>
        </div>
        <h1 className="mt-4 countnum">{count}</h1>
      </div>
    </>
  );
};
