import { createTheme } from '@mui/material/styles'
import { palette } from './palette'
import { typography } from './typography'
import { shape } from './shape'
import { components } from './components'
import { dashboard } from './dashboard'

export const theme = createTheme({
    palette: palette,
    typography: typography,
    shape: shape,
    components,
    dashboard
});
