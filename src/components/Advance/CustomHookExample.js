import React from "react";
import UseCustomHooks from "./UseCustomHook";

const CustomHookExample = () => {

  // ! eita console a giye application a giye local storage a data store kore rakhbe basically 
  
  const [name,setName] = UseCustomHooks("name","NURI");
  
  return (
    <div className="container">
      <input
        style={{
          display: "flex",
          margin: "10px",
          fontSize: "20px",
          textAlign: "center",
        }}
        type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />
      <div
        className="x "
        style={{
          justifyContent: "center",
          display: "flex",
          justifyItems: "center",
          textAlign: "center",
        }}
      >
        <h3> value is {name}</h3>
      </div>
    </div>
  );
};

export default CustomHookExample;