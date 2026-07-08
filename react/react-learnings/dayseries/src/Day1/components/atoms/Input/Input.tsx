import React from 'react';

interface Inputprops{
    placeholder?: string;
    value ?: string;
    onChange ?: React.ChangeEventHandler<HTMLInputElement>;
}


const Input:React.FC<Inputprops> = ({placeholder,value,onChange}) => {

    return(
        <>
            <input type="text" placeholder={placeholder} value={value} onChange={onChange}/>
        </>
    )
}

export default Input;