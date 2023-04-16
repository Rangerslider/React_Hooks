import "../assets/Style/App.css";
import { useState } from "react";

function AdvanceUSeState() {
  //! so lets say , amader akn object niye  kaj korty hobe tahole use state a 2 vabe kora jai . 1st way hocche akta akta kore destructure kore ber kore ene alada alada usestate dore kora R 2nd way hocche ak bar a 

  //? 1st way and most efficient way is

  //* 1st a object theke value of count and color ber kore nibo
  const countValue = 0;
  const colorValue = "red";

  const [count, setCount] = useState(countValue);
  const [colors, setColor] = useState(colorValue);

  const Both = () => {
    // if we want to change the value of both  count and color
    setCount((prev) => {
      return prev + 1;
    });

    setColor((precolor) => {
      return precolor === "red" ? "blue" : "blue" ? "red" : "red";
    });
  };

  //  if we want to change the value of count only
  const CountOnly = () => {
    setCount((prevcount) => {
      return prevcount - 1;
    });
  };

  return (
    <div className="Parent">
      <div className="text-content">UseState Advanced</div>
      {/* //! it will change , only count value  */}
      <button className="negative" onClick={CountOnly}>
        -
      </button>
      <span className="center-content">
        {count} {colors}
      </span>
      {/* //! change  both value  */}
      <button className="positive" onClick={Both}>
        +
      </button>
    </div>
  );
}

export default AdvanceUSeState;

//? 2nd way hocche ( complecated  not recomended ( just for knowledge ) )

//   const [State, setState] = useState({ count: 0, color: "red" });
//   const count = State.count;
//   const colors = State.color;

//   const Both = () => {
//     // if we want to change the value of both  count and color
//     setState((prevstate) => {
//       return {
//         color: "blue",
//         count: prevstate.count + 1,
//       };
//     });
//   };

//   //  if we want to change the value of count only
//   const CountOnly = () => {
//     setState((prevstate) => {
//       return {
//         ...prevstate,
//         count: prevstate.count - 1,
//       };
//     });
//   };

//   return (
//     <div className="Parent">
//       <div className="text-content">UseState Advace</div>
//       <button className="negative" onClick={CountOnly}>
//         -
//       </button>
//       <span className="center-content">
//         {count} {colors}
//       </span>
//       <button className="positive" onClick={Both}>
//         +
//       </button>
//     </div>
//   );
// }
// export default AdvanceUSeState;