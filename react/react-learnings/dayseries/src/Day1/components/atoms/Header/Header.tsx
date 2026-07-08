import React from 'react';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    const headerStyles = {}
    return(
        <>
            <h1 style = {headerStyles}>{title}</h1>
        </>
    )
}

export default Header;