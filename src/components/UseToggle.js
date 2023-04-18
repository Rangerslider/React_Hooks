// notes:

// import { useState, useCallback } from 'react'

// const useToggle = (initialValue: boolean): [boolean, () => void] => {
//   const [value, setValue] = useState(initialValue)

//   const toggleValue = useCallback(() => {
//     setValue(prevValue => !prevValue)
//   }, [])

//   return [value, toggleValue]
// }
// useToggle is a simple hook that allows you to toggle a boolean value. 
// This can be particularly useful when dealing with modals, dropdowns, and other UI elements that need to be toggled on and off.










import { useState } from "react";

function useToggle(initialValue) {

  const [value, setValue] = useState(initialValue);


//   ! eita use korle just 1st bar toggle korbe 2nd time korbe nah cz state change hobe nah ajonno 

// ? setValue( (currentValue) => do some oparetion here  ) ei format a korty hobe 

  // function ToggleValue(value){

  //     const TypeOfValue = typeof (value);

  //      value=TypeOfValue==='boolean'?value:!initialValue;

  //      setValue((prev)=>value);

  // }

  function ToggleValue(value) {

    setValue((currentValue) =>

    // ! value er type jodi boolean nah hoi that means ture or false nah hoi  tahole just opposite ta set kore dibo ..

    // ? else same value tai rekhe dibo . 

    typeof value === "boolean" ? value : !currentValue
    
    );
  }

//   ! return [value, ToggleValue()] eita dile error ashbe karon kono function er por () dile call hoye jai .that mean eita auto call korbe r infinity loop a cole jabe 

  return [value, ToggleValue];
}
export default useToggle;