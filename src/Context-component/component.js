// import "../assets/Style/App.css";
import Component1 from "./component1";
import Component2 from "./component2";
import Component3 from "./component3";
import { useState } from "react";
import React from "react";
import { UserContext } from "./usercontext";

// ! import a { } diye import korle akta file theke oi function ke import kore R 
//? import a { } nah dile oi file ta ke import kore 

//* context amader 2 ta dei 1st one is provider and 2nd one is consumer . consumer use na kore useContext  hook use korbo

export default function Component() {

  const [user, setUser] = useState({
    name: "nuri",
    age: 23,
    email: "nuri@example.com",
    pro: "Soft Engineer",
  });

  return (
    <div className="parent">
        
      {/*  UserContext context api ta amader kon kon value dibe eita bole dicche , r provider er majhe bole dicche ke ke eita nite parbe  */}
     
      <usercontext.Provider value={ {user, setUser} }>
        <component1 />
        <component2 />
        <component3 />
      </usercontext.Provider>
    </div>
  );
}