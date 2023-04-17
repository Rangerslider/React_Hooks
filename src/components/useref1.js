import { useRef } from "react";
import React from "react";

// ! UseRef  is a built-in hook in React, which provides a way to create and access a mutable reference to a DOM element or a value, without triggering a re-render of the component.

const UseRefExample2 = () => {

  const inputRef = useRef(null);

  return (
    <div className="xx"
      style={{
        width: "400px",
        display: "inline-flex",
        flexDirection: "column",
        padding: "15px",
      }}  >
      <input type="text" ref={inputRef} style={{ margin: "15px" }} />
      <input type="text" style={{ margin: "15px" }} />
      <button style={{ margin: "15px" }} onClick={() => { inputRef.current.focus();}}>
        Focouse Input
      </button>
    </div>
  );
};

export default UseRefExample2;