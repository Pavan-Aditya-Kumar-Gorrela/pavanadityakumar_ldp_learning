import { Avatar } from '@mui/material';

type CustomAvatarProps = {
    children : React.ReactNode;
    varaint : 'circular' | 'rounded' | 'square';
}

const CustomAvatar = ({ children, varaint }: CustomAvatarProps) =>{
    return(
        <Avatar variant={varaint}>
            {children}
        </Avatar>
    )
}

export default CustomAvatar;