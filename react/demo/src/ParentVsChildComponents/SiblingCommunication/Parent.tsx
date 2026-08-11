import { useState } from "react";

function Parent() {
    const [color, setColor] = useState<string>("red");

    return (
        <>
            <ChildA setColor={setColor} />
            <ChildB color={color} />
        </>
    )
}

interface ChildAProps {
    setColor : React.Dispatch<React.SetStateAction<string>>;
}

function ChildA({setColor}:ChildAProps) {
    return (
        <>
            <input type = "color" onChange={(e)=>setColor(e.target.value)} />
        </>
    )
}

interface ChildBProps {
    color: string;
}

function ChildB({color}:ChildBProps) {
    return (
        <>
            <div style={{width:"100%", height:"50vh", backgroundColor:color, marginTop:"100px"}}></div>
        </>
    )
}

export default Parent;