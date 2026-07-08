import React from 'react';

interface ButtonProps{
    title: string;
    color:string;
    disabled?: boolean;
    onClick : React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({title,color,disabled,onClick}) => {
    const buttonStyle = {
        padding : '10px 15px',
        backgroundColor : color,
        color : 'white',
        border : 'none',
        borderRadius : '5px',
        cursor : disabled ? 'not-allowed' : 'pointer',

    }
    return(
            <>
                <button style = {buttonStyle} onClick= {onClick}>{title}</button>        
            </>
        )
}

export default Button;