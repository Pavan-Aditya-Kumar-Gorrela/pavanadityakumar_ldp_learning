interface AvatarProps{
    imageUrl: string;
    altText: string;
}

const Avatar = ({imageUrl, altText}: AvatarProps) => {
    return(
        <img src={imageUrl} alt={altText} style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
    )
}

export default Avatar;