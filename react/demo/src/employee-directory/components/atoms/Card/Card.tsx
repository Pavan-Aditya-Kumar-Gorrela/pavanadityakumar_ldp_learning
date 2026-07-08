interface CardProps{
    children: React.ReactNode;
}

const Card:React.FC<CardProps> = ({ children }) => {

    const cardStyle: React.CSSProperties={
        border : "1px solid #ccc",
        borderRadius : "5px",
        width: "500px",
        height: "400px",
        background: "aliceblue",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        
    }
    return (
        <div style={cardStyle}>
            {children}
        </div>
    )
}

export default Card;