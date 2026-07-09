import React, { useEffect } from "react";

const FunctionalComponent:React.FC = () =>{

    // useEffect(()=>{
    //     console.log("Functional Component Mounted");
    // },[]);

    useEffect(()=>{
        return ()=>{
            console.log("Functional Component Unmounted");
        }
    },[]);

    return <h1>This is a Functional Component</h1>;
}

export default FunctionalComponent;