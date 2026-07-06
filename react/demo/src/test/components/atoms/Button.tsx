interface ButtonProps {
    text: string;
    color: string;
    disabled?: boolean;
}

const Button = ({ text, color="skyblue", disabled }: ButtonProps) => {
    return (
        <>
            {disabled ? (
                <button style={{ backgroundColor: "gray", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "not-allowed" }} disabled>
                    {text}
                </button>
            ) : (
                <button style={{ backgroundColor: color, color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={() => {
                    alert(`${text} triggered`)
                }}>
                    {text}
                </button>
            )}
        </>
    )
}

export default Button;

//Functional Component

// const Button = () =>{
//     return (
//         <button onClick={() => alert("Button clicked!")}>Click Me</button>
//     )
// }

// export default Button;




//// Class Component
// import React from "react";
// class Button extends React.Component {
//     render() {
//         return <button onClick={() => alert("Button clicked!")}>Click Me</button>;
//     }
// }

// export default Button;
