import { React, useEffect, useRef, useState } from "react";

// * so basically we are using useRef to remember the previous vlaue of any component 

const UseRefExample = () => {

  const rendercount = useRef(0);

  //!    its contain { current value : 0 } ,, eita sob somoi current value ta update kore jeita rerender a change hoi nah

  const PrevName = useRef(" ");

  const [name, setName] = useState("");

  useEffect(() => {
    rendercount.current = rendercount.current + 1;
  });

  useEffect(() => {
    PrevName.current = name;
  },[name]);

  //!   akn ami jodi renderCount ta just akta usestate use kore kori tahole ,
  // ?  state change korle e useEffect run korbe abr useEffect er majhe state change hocche  so basically:
  // !  state change tigger useEffect ==> useEffect tigger state change
  // *  so akta infinity loop create hoye jacche initially  eita avoid korar jonno amar useref use korbo
  //! useRef is very similar to State, but it's a ref. Ref doesn't cause  component re-update when its value changes.

  return (
    <>
      <div className="x">
        <input
          type="text"
          value={name}
          style={{
            alignSelf: "center",
            width: "400px",
            height: "5vh",
            color: "red",
            border: "2px solid blue",
            fontSize: "26px",
            fontWeight: "bold",
          }}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="text-content">
          MY current name is {name} & previous name is {PrevName.current}
        </div>
        <div className="text-content">
          I Rendered {rendercount.current} Times
        </div>
      </div>
    </>
  )
};

export default UseRefExample;