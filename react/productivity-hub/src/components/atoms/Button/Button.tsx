import { Button as MuiButton } from '@mui/material';

type CustomButtonProps = {
    label: string;
    onClick: () => void;
    size: 'small' | 'medium' | 'large';
};
const CustomButton = ({ label, onClick, size }: CustomButtonProps) => {
    return (
        <MuiButton variant="contained" color="primary" size={size} onClick={onClick}>
            {label}
        </MuiButton>
    )
}

export default CustomButton;