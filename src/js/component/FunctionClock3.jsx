import React from "react";
import { useState, useEffect } from "react";

const FunctionClock3 = () => {
	
    const [count, setCount] = useState(0);

    let interval
    useEffect(() => {
    interval = setTimeout (() =>{
      setCount (
        (count) => count +1);
    }, 1000000);});
        
    const init = () =>{
        if (count > 9){
            setCount(0)
        }
    }
    init()
     
        
    return(
    <div className="sqr">{ count }</div>
    );
}

export default FunctionClock3;