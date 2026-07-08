import React from 'react';

interface AvatarProps {
    imageUrl: string;
    text : string;
    size : 'sm' | 'md' | 'lg';
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl, text, size }) => {
    
    const avatarStyle = {
        width: size === 'sm' ? '30px' : size === 'md' ? '50px' : '70px',
        height: size === 'sm' ? '30px' : size === 'md' ? '50px' : '70px',
    };

    return (
        <div className={`avatar-${size}`} style={avatarStyle}>
            <img src={imageUrl} alt={text} />
        </div>
    );
};

export default Avatar;