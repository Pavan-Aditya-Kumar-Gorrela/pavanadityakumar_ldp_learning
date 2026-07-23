import { useState } from "react";

export default function Batch() {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(20);

    console.log("Render");

    return (
        <button
            onClick={() => {
                setTimeout(() => {
                    setCount((count) => count + 1);
                    setAge((age) => age + 1);
                }, 1000);
                console.log("Count:", count);
                console.log("Age:", age);
            }}
        >
            Update
        </button>
    );
}