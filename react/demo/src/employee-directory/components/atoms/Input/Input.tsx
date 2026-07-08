interface InputProps{
    placeholder:string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input:React.FC<InputProps> = ({ placeholder, onChange }) => {
    const inputStyle: React.CSSProperties={
        border : "1px solid #ccc",
        borderRadius : "5px",
        width: "600px",
        height: "30px",
        background: "aliceblue",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "5px"
    }

    return (
        <input type="text" placeholder={placeholder} style={inputStyle} onChange={onChange}/>
    )
}

export default Input;