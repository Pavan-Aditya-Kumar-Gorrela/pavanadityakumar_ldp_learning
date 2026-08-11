import { Typography } from '@mui/material';

type CustomTypographyProps = {
    variant: 'h1' | 'h2' | 'h3' | 'body1' | 'body2';
    color : string;

}

const CustomTypography = ({ variant, color }: CustomTypographyProps) =>{
    return(
        <Typography variant={variant} style={{ color }}>
            Custom Typography
        </Typography>
    )
}

export default CustomTypography;