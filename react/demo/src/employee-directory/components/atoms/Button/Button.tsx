interface ButtonProps {
    text: string;
    color: string;
    textColor?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button:React.FC<ButtonProps> = ({ text, color, textColor, onClick }) => {
    
    const buttonStyle: React.CSSProperties = {
        backgroundColor: color,
        color: textColor || "black",
        border : "0.5px solid #ccc",
        borderRadius : "5px",
        padding : "10px 15px",
        cursor : "pointer",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.3s ease",
    }

    return(
        <>
            <button style = {buttonStyle} onClick={onClick}>{text}</button>
        </>
    )
}

export default Button;