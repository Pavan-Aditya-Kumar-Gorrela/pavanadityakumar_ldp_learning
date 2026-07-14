import {useState} from "react";

function Parent(){
    const [name , setName] = useState<string>("");

    return (
        <>
            <ChildA name={name} setName={setName} />
            <ChildB name={name} />
        </>
    )
}

interface ChildAProps{
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
}
function ChildA({name, setName}:ChildAProps) {
    return (
        <div>
            <h2>Child A</h2>
            <p>Name: {name}</p>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
}

interface ChildBProps{
    name: string;
}
function ChildB({name}:ChildBProps) {
    return (
        <div>
            <h2>Child B</h2>
            <p>Name: {name}</p>
        </div>
    );
}

export default Parent;