export default function Index(){
    return(
        <div onClick = {()=>{
            console.log("Parent Called");
        }}
        style ={{
            padding : "40px",
            border : "2px solid black",
            background : "#ffdede",
        }}
        >
            <button
                onClick = {(e)=>{
                    console.log("Child Called");
                    e.stopPropagation();
                }}
            >Click me </button>
        </div>
    )
}