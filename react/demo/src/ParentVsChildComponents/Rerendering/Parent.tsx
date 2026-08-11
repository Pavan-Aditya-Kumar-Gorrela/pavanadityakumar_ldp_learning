import {useState} from 'react';
import Child from './Child';

function Parent() {
    console.log("Parent component rendered");
    const [count , setCount] = useState(0);
    
    const handleIncrement = () => {
        setCount(count + 1);
    }

    return (
        <>
            <h1>Parent Component</h1>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <Child />
        </>
    )
}




export default Parent;