import { useMemo, useState } from 'react';
import { Box, Button, CssBaseline, Stack, ThemeProvider, Typography } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { lightTheme, darkTheme } from './theme';
import { UserProfile } from './UserProfile';
import { ColorModeContext } from './colorMode';

function UserPage() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 3,
            px: 2,
            py: 4,
          }}
        >
          <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
            <Typography variant="subtitle1" color="text.secondary">
              Theme
            </Typography>
            <Button
              variant="outlined"
              onClick={colorMode.toggleColorMode}
              startIcon={mode === 'light' ? <DarkMode /> : <LightMode />}
            >
              Switch to {mode === 'light' ? 'dark' : 'light'}
            </Button>
          </Stack>

          <UserProfile
            name="Pavan Kumar"
            role="AI/Full-Stack Developer"
            email="pavan@example.com"
          />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default UserPage;