import { useRef , useState, useEffect} from "react";

export default function Index() {
    const inputRef = useRef<HTMLInputElement>(null);

    const focusInput = () =>{
        inputRef.current?.focus();
    }

    return(
        <>
            <div style={{ padding: 20 }}>
            <input ref={inputRef} placeholder="Enter your name" />

            <br />
            <br />

            <button onClick={focusInput}>
                Focus Input
            </button>
        </div>
        </>
    )
}

export function Index2() {
    
    const [ count, setCount] = useState(0);
    const ref = useRef(0);  
    useEffect(() =>{

        ref.current = count;
    },[count]);

    return (
        <>
            <h2>Count : {count}</h2>
            <h2>Previous Count : {ref.current}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    )
}