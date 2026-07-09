import './Avatar.css';
interface AvatarProps {
    /** The URL of the avatar image */
    src: string;
    /** The alternative text for the avatar image */
    alt: string;
    /** The size of the avatar */
    size?: 'small' | 'medium' | 'large';
    /** Optional click handler */
    onClick?: () => void;

}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 'medium', onClick }) => {
    const sizeClass = `avatar-${size}`;
    return (
        <img
            src={src}
            alt={alt}
            className={sizeClass}
            onClick={onClick}
        />
    );
};

export default Avatar;