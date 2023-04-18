// Create a custom hook that takes a value and a delay.
// Use the useState() hook to store the debounced value.
// Use the useEffect() hook to update the debounced value every time value is updated.
// Use setTimeout() to create a timeout that delays invoking the setter of the previous state variable by delay ms.
// Use clearTimeout() to clean up when dismounting the component.const useDebounce = (value, delay) => {


// syntax:
//     const [debouncedValue, setDebouncedValue] = React.useState(value);

//     React.useEffect(() => {
//       const handler = setTimeout(() => {
//         setDebouncedValue(value);
//       }, delay);
  
//       return () => {
//         clearTimeout(handler);
//       };
//     }, [value]);
  
//     return debouncedValue;
//   };


import { useEffect, useState } from "react";

function UseDebounce(value, delay) {
 
  console.log(value,delay)

  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {

    // ! update debouncedValue after given delay or after 500 milliseconds if given delay is 0

    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay || 500);

    return () => {
         
      //! Cancel the timeout if value changes (also on delay change or unmount)
      //! This is how we prevent debounced value from updating if value is changed ...
      //! .. within the delay period. Timeout gets cleared and restarted.
    // ? so basically amra ei cleartimeout diye jodi given delay er majhe kno key press hoi tahole oi ager time cancle kore new time abr set kore dibo 
    // * so ei vabe colty thakbe joto time nah typing ses hocche ... typing ses korle then debounce er value set kore return kore dibo 

      clearTimeout(timer);

    };
  }, [value, delay]);

  return debouncedValue;
}

export default UseDebounce;