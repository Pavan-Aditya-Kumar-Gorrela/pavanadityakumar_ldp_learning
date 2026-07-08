interface AvatarProps{
    url:string
}

const Avatar:React.FC<AvatarProps> = ({ url }) => {
    const avatarStyle: React.CSSProperties={
        border : "1px solid #ccc",
        borderRadius : "50%",
        width: "200px",
        height: "180px",
        background: "aliceblue",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "10px",
        overflow: "hidden",
    }
    return (
        <div style= {avatarStyle}>
            <img src= {url} alt="avatar" width="200px" height="200px" />
        </div>
    )
}

export default Avatar;