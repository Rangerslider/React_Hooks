import {  useEffect, useState } from "react";

import useDebounce from "./UseDebounce.js";

export default function UseDebounceHook() {

  const [value, setValue] = useState("");

  const debouncedValue = useDebounce(value,400);

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  useEffect(() => {

    //! Do fetch here...
    //! Triggers when "debouncedValue" changes
    console.log("DebouncedValue",debouncedValue);

  }, [debouncedValue]);

  return (
    <div>
      <p>Value real-time: {value}</p>
      <p>Debounced value: {debouncedValue}</p>

      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}