import { memo, useState } from "react";

function Child(){
    console.log("Child component rendered");
    const [count , setCount] = useState(0);
    
    const handleIncrement = () => {
        setCount(count + 1);
    }
    return (
        <>
            <h1>Child Component</h1>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
        </>
    )
}

export default memo(Child);