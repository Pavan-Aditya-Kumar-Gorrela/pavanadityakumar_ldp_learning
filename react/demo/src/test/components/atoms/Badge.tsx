interface BadgeProps {
    text:string;
    color:string;
}

const Badge = ({text, color}: BadgeProps) => {
    return (
        <span style={{backgroundColor: color, color: "white", padding: "5px", borderRadius: "5px"}}>{text}</span>
    )
}
export default Badge;