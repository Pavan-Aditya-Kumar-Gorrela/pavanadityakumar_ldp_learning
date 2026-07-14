import {useState} from "react";
interface ChildProps{
    fruits: string[];
    sendMsg : (msg:string) => void;
}

function Child({fruits, sendMsg}:ChildProps){
    return (
        <>
            <ul>
                {fruits.map((fruit,idx)=>{
                    return <li key={idx}>{fruit}</li>;
                })}
            </ul>
            <button onClick={()=>sendMsg("Hello from Child")}>Send Message to Parent</button>
        </>
    )
}

function Parent(){
    const [message, setMessage] = useState<string>("");
    const handleMessage = (msg:string) => {
        setMessage(msg);
    }
    return(
        <>
            <h1>Hello From Parent </h1>
             <h1>{message}</h1>
            <Child fruits={['Apple', 'Banana', 'Orange']} sendMsg={handleMessage} />
        </>
    )
}

export default Parent;