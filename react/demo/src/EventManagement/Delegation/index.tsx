// export default function Index(){
//     const users = ["Pavan", "Aditya", "Kumar"];

//     return(
//         <div  onClick = {(e)=>{
//             console.log(e.target);
//         }}
//         style = {{
//             padding : "40px",
//             border : "2px solid black",
//             background : "#ffdede",
//         }}
//         >
//             {users.map((user)=>(
//                  <button key = {user}>{user}</button>
//             ))}
//         </div>
//     )
// }

export default function Index() {
    const users = ["Pavan", "Aditya", "Kumar"];
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLButtonElement;
        console.log(target.innerText);
    }

    return(
        <div  onClick = {handleClick}
        style = {{
            padding : "40px",
            border : "2px solid black",
            background : "#ffdede",
        }}
        >
            {users.map((user)=>(
                 <button key = {user}>{user}</button>
            ))}
        </div>
    )
}
