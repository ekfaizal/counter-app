import React from "react";
import Logged from "./Logged";
import NotLogged from "./NotLogged";


const Mains = ({isloggedin}) => {
  console.log(isloggedin);
  return <div>
    {isloggedin?<Logged/>:<NotLogged/>}
  </div>;
};

export default Mains;
