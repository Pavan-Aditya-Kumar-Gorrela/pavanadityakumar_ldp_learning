import { useState } from "react";

export default function Index(){
    const [name, setName] = useState("");
    console.log("Rendering Controlled Form");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    return (
        <>
            <input type="text" placeholder="Enter your name" value={name} onChange={handleChange} />
            <button type="button" onClick={() => alert(name)}>Show Value</button>
        </>
    )
}