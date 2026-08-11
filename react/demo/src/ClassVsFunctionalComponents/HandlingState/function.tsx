import React, {useState} from "react";

const FunctionalComponent:React.FC = () =>{
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    return(
        <div>
            <h1>This is a Functional Component</h1>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default FunctionalComponent;