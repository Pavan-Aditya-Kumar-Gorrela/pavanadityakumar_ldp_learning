import { useMemo,useState } from 'react';

function slowFunction(){
    console.log("Calling slow function");
    let total = 0;
    for(let i = 0; i < 1000; i++){
        total += i;
    }
    return total;
}

export default function Index() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    // const total = slowFunction();
    const total = useMemo (() =>{
        return slowFunction();
    }, [])

    return (
        <>
            <h2>Total: {total}</h2>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <input type = "text" onChange = {(e) => setText(e.target.value)} value = {text} placeholder = "Type something..."/>
            <h3>Text: {text}</h3>
        </>
    )
}