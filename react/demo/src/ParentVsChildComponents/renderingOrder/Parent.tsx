import React, { useEffect } from "react";
function Child(){
     console.log("Child component rendered");
    useEffect(() => {
        console.log("Child component mounted");
    }, []);
    return (
       
        <div>
            <h1>This is a Child Component</h1>
        </div>
    )
}

function Parent(){
    console.log("Parent component rendered");
    useEffect(() => {
        console.log("Parent component mounted");
    }, []);
    return (
        <div>
            <h1>This is a Parent Component</h1>
            <Child />
        </div>
    )
}

export default Parent;