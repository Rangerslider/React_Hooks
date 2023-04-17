import "../assets/Style/App.css";

import { useState, useEffect } from "react";

// ! Common Mistake number 1

// function AdvanceUseEffect() {

//   const [name, setName] = useState(" ");
//   const [count, setCount] = useState(0);

//   const [resource, setResource] = useState({
//     name: "nuri",
//     select: false,
//   });

//   // ! Akn ami jodi dependency te akta object pass kori tahole object er sob same thakbar por o code bolbe je  eita match kore nai
//   //? karon objectt r array holo non-premetive like ( [1]!=[1], if joy ={name:"joy"} and pb ={ name:"joy "} then joy!=pb ) .karon era obj er address match kore ejita sob same thakleu alada e hoi  . ajonno direct object or array nah diye specific vabe bole dite hobe

//   // useEffect(() => {
//   //   console.count("this useEffect run again and again ");
//   // }, [resource]);

//   //* correct one ( cz akn name er songe name ke match korbe )

//   useEffect(() => {
//     console.count("this useEffect will not run again and again ");
//   }, [resource.name,resource.select]);

//   const handleadd = () => {
//     setResource((prevState) => ({ ...prevState, name }));
//   };

//   const handleSelect = () => {
//     setResource((prevState) => ({ ...prevState, select: "true" }));
//   };

//   return (
//     <>
//       <div className="Parent">
//         <input type="text" onChange={(e) => setName(e.target.value)} />
//         <button onClick={handleadd}>addName</button>
//         <button onClick={handleSelect}>Selected</button>
//         <button onClick={() => setCount((prevState) => prevState + 1)}>
//           Increased
//         </button>
//       </div>
//       <div className="x">
//       {
//       `{
//           name: ${resource.name},
//           select: ${resource.select.toString()},
//           Count : ${count}
//         }`
//       }
//       </div>
//     </>
//   );
// }

// export default AdvanceUseEffect;

// ! Common Mistake number 2

function AdvanceUseEffect() {
  const [Data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);

  // ? lets say amra akta api theke data ber kore dekhty cai . kintu jodi akjon khub taratai request kore abr cancle kore dei tkn to amader api ager data gulai fetch korty thakbe

  // * sei jonno amra casshi je keu request  cancle korar songe songe e amra api request cancle kore dibo . jate  extra api fetch r load nah pore

  useEffect(() => {
    let Iscancelled = true;
    fetch("https://jsonplaceholder.typicode.com/posts?_page=0&_limit=5")
      .then((res) => res.json())
      .then((data) => {
        if (Iscancelled) {
          alert("post are ready boss ");
          setData(data);
        }
      });

    // ! This one is the clean up function .. its empact a lot in efficiency
    return (() => {
      Iscancelled = false;
    });
  }, []);

  useEffect(() => {
    console.log(
      "this is the 1st console from the useEffect but this will run later "
    );
    // some functions or sometings

    //! clean up fuction
    return () => {
      // ? clean somthing from the previous effect
      console.log("clean up function executed");
    };
  }, [toggle]);

  return (
    <>
      <div className="Parent">
        <button onClick={() => setToggle(!toggle)}>
         Toggle
        </button>
        {Data?.map((p) => (
          <div key={p.id}>
            <p>{p.id}</p>
            <p> {p.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default AdvanceUseEffect;