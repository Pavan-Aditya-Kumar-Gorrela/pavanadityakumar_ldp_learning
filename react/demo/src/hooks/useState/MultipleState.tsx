import { useState } from "react";
import { Card } from "@mui/material"

export default function MultipleState() {
    const [name, setName] = useState('');
    const [ age , setAge ] = useState(0);
    const [city , setCity] = useState('');
    
    return(
        <>
            <p>Set Name:</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <p>Set Age:</p>
            <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
            <p>Set City:</p>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            <Card>
                <h2>Name: {name}</h2>
                <h2>Age: {age}</h2>
                <h2>City: {city}</h2>
            </Card>
        </>
    )
}