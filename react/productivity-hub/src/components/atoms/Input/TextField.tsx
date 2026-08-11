import { TextField } from '@mui/material';

type CustomTextFieldProps = {
    label : string;
    placeholder : string;
    variant : 'outlined' | 'filled' | 'standard';
}

const CustomTextField = ({ placeholder, variant, label }: CustomTextFieldProps) =>{
    return(
        <TextField placeholder={placeholder} variant={variant} label = {label}/>
    )
}
    
export default CustomTextField;