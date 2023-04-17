import { useContext } from "react";

import {UserContext} from "./usercontext";


export default function Component1(){

  const { user }= useContext(UserContext);

  // ! ei jaigai { } deyar karon holo ami UserContext theke user ke ber kore niye aslam . i mean destruct korlam

  const Pagestyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px",
  };

    return (
        <div className="parent" style={Pagestyle}>
            
        {
            `{
                Name: ${user.name} 
            }`
        }
        </div>
    )
}