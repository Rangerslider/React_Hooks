// usememo hosse expensive function ke memorise kore rakhe 
//here expensive function call korse computeLetterCount ke jokon current select word change hosse and delay recall korse computeLetterCount ke new word er jonne . 
//amra counter ke seperate kore disi jate button e click korle incriment hote thake .



//ex: basic ex reading website

// import React, { useCallback, useMemo } from "react";
// function App() {
//   const [count, setCount] = useCallback(0);
//   //State to keep track of current word in array we want to show
//   const [wordIndex, setWordIndex] = useState(0);
//   // Words we can flip through and view letter count
//   const words = ["hey", "this", "is", "cool"];
//   const word = words[wordIndex];
//   // Returns number of letters in a word
//   // We make it slow by including a large and completely unnecessary loop
//   const computeLetterCount = (word) => {
//     let i = 0;
//     while (i < 1000000000) i++;
//     return word.length;
//   };
//   // Memoize computeLetterCount so it uses cached return value if input array ...
//   // ... values are the same as last time the function was run.
//   const letterCount = useMemo(() => computeLetterCount(word), [word]);
//   // This would result in lag when incrementing the counter because ...
//   // ... we'd have to wait for expensive function when re-rendering.
//   //const letterCount = computeLetterCount(word);
//   return (
//     <div style={{ padding: "15px" }}>
//       <h2>Compute number of letters (slow)</h2>
//       <p>
//         "{word}" has {letterCount} letters
//       </p>
//       <button
//         onClick={() => {
//           const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
//           setWordIndex(next);
//         }}
//       >
//         Next word
//       </button>
//       <h2>Increment a counter (fast)</h2>
//       <p>Counter: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }








//mnu : 

import React, { useCallback, useMemo } from "react";
import Title from "./title.js";
import ShowCount from "./showCount.js";
import Button from "./button.js";
import { useState } from "react";

function UseCallback_UseMemo() {

  // ! inital obosthai sob gula component unnecessary rendering hocche ....  karon amra jkn kono state change kori tkn sob gula state render hoi
  //? akn eita normally khub akta prob create kore nah , kintu jkn onk complecated calculation thakbe kono akta state a r seita bar bar render korle performance a khub baze vabe slow kore dibe
  // * sei jonno amra React.memo use korty pari , jeita korbe ki output ta mone rakhbe r oi output jto time nah change hocche toto time eita render korbe nah
  // * mane state change korbe nah seijonno render o hbe nah  .... so eita korar jonno basically amader export er jaigai React.memo use kore dibo .. i mean wrap kore dibo . which is the higher order function


  
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);



  // ! amra Button component a react.memo use korlau eita bar bar render hobe karon
  // ?  In JavaScript, a function () {} or () => {} always creates a different function, similar to how the {} object literal always creates a new object
  // * Object r array holo premetive type so oder sob kisu same holau proti render a new new function create korbe eitar address alada . so ajonno function tau alada


  // const incrementByOne = () => {
  //   setCount1((prevCount1) => prevCount1 + 1);
  // };



  // ? eita ke deal korty pari useCallback diye , karon useCallback function ke mone rakhe
  //! By wrapping handleSubmit in useCallback, you ensure that it’s the same function between the re-renders (until dependencies change).
  // ? useCallback(fn, dependencies) 1st parameter one is a function to be called, 2nd parameter is an array of dependencies.
  // * React will return (not call!) your function back to you during the initial render. That means eita function mone rakhbe call kore nah



  const incrementByOne = useCallback(() => {
    setCount1((prevCount1) => prevCount1 + 1);
  }, []);

  

  // ! prevcount diye korle dependency arrary te value deya lage nah react eita by default bujhe nai kintu
  //*  normal korty dependencies te count bole dite hobe. tau thik moto kaj kore nah .  like this one

  
  // const incrementByFive = useCallback(() => {
  //   setCount2(count2 + 1);
  // }, [count2]);


   const incrementByFive = useCallback(() => {
     setCount2((prevCount2) => prevCount2 + 5);
   }, []);


  //  ! UseMemo 



  // * let say amader ei function ta just count1 er jonno calculate korte hobe kintu eita akta function so joto bar eita render korbe toto bar e ei function ta run korbe 
  // ! amra ei jaigai usecallback use korty parbo nah karon amader to function ta ke mone rekhe lav nai karon mone rakhlau amake sei run e korty hocche bar bar 
  // ? so ei jonno amra useMemo use korty pari . jeita ei value take mone kore rakhbe . r eitar dependency arrary te just jader state change korle eita calculate korty hobe tder value set kore dibo 

  // const IsEven =()=>{
    
  //   // ! protibar amake ei complex calculation ta korte hocche . 
    
  //   let x=0;
  //   while(x<100000000)x++;

  //   return count1%2===0?"Even":"Odd";
  // }

  // ? so eitake amra bar bar run nah kore just amra mone kore rakhbo 

   const IsEven = useMemo(() => {

    // ! akn just count1 er value change korle eita ei calculation ta korbe else ager mone rakha value e print kore dibe 
    
    let x = 0;
     while (x < 100000000) x++;
    console.log("Only run when count1 is tiggered")
     return count1 % 2 === 0 ? "Even" : "Odd";
   },[count1]);


  return (
    <div className="App">
      <Title />
      <ShowCount count={count1} title="Counter 1" />
      <span>{IsEven}</span>
      <Button handleClick={incrementByOne} text="Increment By one">
        Increment By one
      </Button>
      <hr />
      <ShowCount count={count2} title="Counter 2" />
      <Button handleClick={incrementByFive} text="Increment By Five">
        Increment By five
      </Button>
      <hr />
    </div>
  );
}
export default UseCallback_UseMemo;