//  1. import useEffect
// import { useEffect } from 'react';

// function MyComponent() {
//   2. call it above the returned JSX  
//   3. pass two arguments to it: a function and an array
//   useEffect(() => {}, []);
//   return ...
// }


import "../assets/Style/App.css";
import { useState, useEffect } from "react";

function BasicUseEffect() {
  const [resource, setResource] = useState(" ");
  const [comments, setCommets] = useState("hey");

  //  * useEffect basically runs a function when the specified component changes its state.
  //  *  so baper ta hocche react a kono akta component er state change hole e rander hoi akn ami jodi ami cai je ,
  // * ami sob somoi render korbo nah . just akta specific component state change hole e render korbo tahole ami oita useEfect er majhe diye dependency te oi state diye dibo

  useEffect(() => {
    console.log("it will run only when change resource");
  }, [resource]);

  useEffect(() => {
    console.log("it will run only when change comments");
  }, [comments]);

  // or we can  use [] insted of { }

  useEffect(() => [console.log("this will also work")], []);

  // ! it will run every time the component  state changes
  // console.log("Default");

  //  !it will run every time the resource state changes

  // useEffect(()=>{
  //   console.log("useEffect called");
  // },[resource])

  //  ? it will run only the first time . because it has an empty array to its dependencies

  // useEffect(()=>[
  //   console.log("useEffect called")
  // ],[ ])

  return (
    <>
      <div className="Parent">
        <button onClick={() => setResource("Post")}>Post</button>
        <button onClick={() => setResource("Get")}>Get</button>
        <button onClick={() => setResource("Put")}>Put</button>
        <button onClick={() => setCommets("HI")}>comment 1 </button>
        <button onClick={() => setCommets("Hello")}>comment 2</button>
      </div>
      <h1 className="header">
        Selected Type is : {resource} {comments}{" "}
      </h1>
    </>
  );
}

export default BasicUseEffect;