import { Checkbox, Form } from '@mui/material';

type CustomCheckboxProps = {
    checked : boolean;
    onChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
    label : string;
}