import { useCallback, useState } from "react";
import Child from "./Child";

export default function Index() {
    const [count, setCount] = useState(0);

    // const handleClick = () => {
    //     console.log("Clicked");
    // };

    const handleClick = useCallback(() => {
        console.log("Clicked");
    }, []);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>
                Count
            </button>

            <Child onClick={handleClick} />
        </>
    );
}