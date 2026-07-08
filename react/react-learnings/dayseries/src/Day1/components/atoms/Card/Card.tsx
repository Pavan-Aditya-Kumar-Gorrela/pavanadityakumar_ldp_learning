import React from 'react';

interface CardProps {
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({children}) => {
    return(
        <>
            {children}
        </>
    )
}

export default Card;