import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";

function GetSavedValue(key, initialvalue) {
    
  // console.log(initialvalue)
    // ! Local Storage theke key dore value fatch kortyci mane key er against a value ber kore niye aschi 

  const SavedValue = JSON.parse(localStorage.getItem(key));

//   ? jodi age theke kno value thake tahole just retrun kore dibo 

  if (SavedValue){ return SavedValue;}

//   * jodi function() type hoi tahole just function retrun kore dibo 

  if (initialvalue instanceof Function) return initialvalue();

//   ? nahole just value return korbo 

  return initialvalue;
}

function UseCustomHooks(key, initialvalue) {

  const [name, setName] = useState(()=>{
    GetSavedValue(key,initialvalue)
  });

   useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(name))
    setName(name)
   },[name])
    // console.log(name, key, initialvalue);

  return [name, setName];
  }

export default UseCustomHooks;