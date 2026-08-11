
export default function Index() {

    
    return(
        <div onClick={() =>{
            console.log("GrandParent Called");
        }} style={{
            border: "2px solid black",
            background: "#ffdede",
            padding: "40px",
        }}>
            <div onClick={() =>{
                console.log("Parent Called");
            }} style={{
                border: "2px solid black",
                background: "#d0ffd0",
                padding: "40px",
            }}>
                <button onClick={() =>{
                    console.log("Child Called");
                }}>Click me</button>
            </div>
        </div>
    )
}