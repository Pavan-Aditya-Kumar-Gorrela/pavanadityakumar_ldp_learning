import { Chip } from '@mui/material';

type CustomChipProps = {
    label : string;
    color : string;
    bgcolor : string;
}

const CustomChip = ({ label, color, bgcolor }: CustomChipProps) =>{
    return(
        <Chip label={label} style={{ color, backgroundColor: bgcolor }} />
    )
}

export default CustomChip;
