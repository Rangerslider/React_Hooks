import { useContext } from "react";
import {UserContext} from "./usercontext";

export default function Component3(){

   const {user,setUser}=useContext(UserContext)
    
   const handleClick = () => {
       setUser((prevState) => ({ ...prevState, name: "Ishmoth Ura Nuri"}));
   };


  const Pagestyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px",
  };


    return (
      <div>
        <div className="parent" style={Pagestyle}>
          <p>user:{user.name}</p>
        </div>
        <button onClick={handleClick} style ={{position:"absolute",width:"10%",left:"45%" ,justifyContent:"center"}}> Change Name </button>
        <div className="" style={Pagestyle}>
          <p>New User Name : {user.name}</p>
        </div>
      </div>
    );
}