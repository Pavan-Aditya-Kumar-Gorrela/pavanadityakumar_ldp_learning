import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#3F51B5' },
    background: { default: '#F5F6FA' },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'sans-serif',
    ].join(','),
  },
});
