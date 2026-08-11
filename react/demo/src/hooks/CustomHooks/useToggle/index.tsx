import { useState } from "react";

export function useToggle(initial = false){
    const [val , setVal] = useState(initial);

    const toggle = () => {
        setVal(prev => !prev);
        document.body.style.backgroundColor =  val ? "white" : "black";
    }

    return {val, toggle};

}