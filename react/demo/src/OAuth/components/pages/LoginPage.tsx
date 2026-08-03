import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, useGoogleLogin, type CredentialResponse } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import {
  Box,
  Paper,
  Tabs,
  Tab,
  Typography,
  Button,
  Alert,
  Stack,
  Divider,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useAuth } from '../../auth/AuthContext';
import type { AppUser } from '../../auth/types';


interface GoogleIdTokenPayload {
  email: string;
  name: string;
  picture: string;
}



function TabPanel({ value, index, children }: { value: number; index: number; children: React.ReactNode }) {
  if (value !== index) return null;
  return <Box sx={{ pt: 3 }}>{children}</Box>;
}

const LoginPage = () => {
  const [tab, setTab] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [authCode, setAuthCode] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const goToDashboard = (user: AppUser) => {
    login(user);
    navigate('/dashboard', { replace: true });
  };

  const handleIdTokenSuccess = (credentialResponse: CredentialResponse) => {
    setError(null);
    if (!credentialResponse.credential) {
      setError('No credential returned from Google.');
      return;
    }
    const payload = jwtDecode<GoogleIdTokenPayload>(credentialResponse.credential);
    goToDashboard({
      email: payload.email,
      name: payload.name,
      picture: payload.picture,
      loginMethod: 'id-token',
    });
  };


  const accessTokenLogin = useGoogleLogin({
    flow: 'implicit', 
    onSuccess: async (tokenResponse) => {
      setError(null);
      try {
        const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        });
        if (!res.ok) throw new Error('Failed to fetch userinfo');
        const profile = await res.json();
        goToDashboard({
          email: profile.email,
          name: profile.name,
          picture: profile.picture,
          loginMethod: 'access-token',
        });
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Login failed');
      }
    },
    onError: () => setError('Google popup login failed or was closed.'),
  });

  const authCodeLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: (codeResponse) => {
      setError(null);
      setAuthCode(codeResponse.code);
    },
    onError: () => setError('Google popup login failed or was closed.'),
  });

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        p: 2,
      }}
    >
      <Paper elevation={2} sx={{ width: '100%', maxWidth: 460, p: 4 }}>
        <Stack spacing={0.5} sx={{ mb: 2 }}>
          <Typography variant="h5" fontWeight={600}>
            Sign in
          </Typography>
        </Stack>

        <Tabs
          value={tab}
          onChange={(_, v) => {
            setTab(v);
            setError(null);
          }}
          variant="fullWidth"
        >
          <Tab label="ID Token" />
          <Tab label="Access Token" />
          <Tab label="Auth Code" />
        </Tabs>

        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}

        
        <TabPanel value={tab} index={0}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Decodes the ID token (JWT) client-side. Simplest option for reading
            profile info; verify server-side for real auth.
          </Typography>
          <Box display="flex" justifyContent="center">
            <GoogleLogin
              onSuccess={handleIdTokenSuccess}
              onError={() => setError('Google login failed.')}
              useOneTap
            />
          </Box>
        </TabPanel>

        
        <TabPanel value={tab} index={1}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Opens a popup, returns an access token, then we call Google's
            userinfo endpoint ourselves.
          </Typography>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            onClick={() => accessTokenLogin()}
          >
            Continue with Google (popup)
          </Button>
        </TabPanel>

       
        <TabPanel value={tab} index={2}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Returns a one-time authorization code meant for your backend to
            exchange with your Client Secret. No backend here, so we just
            display the code below.
          </Typography>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            onClick={() => authCodeLogin()}
          >
            Get authorization code
          </Button>
          {authCode && (
            <Box sx={{ mt: 2 }}>
              <Divider sx={{ mb: 1.5 }} />
              <Typography variant="caption" color="text.secondary">
                Authorization code (send this to your backend):
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  wordBreak: 'break-all',
                  bgcolor: 'grey.100',
                  p: 1,
                  borderRadius: 1,
                  mt: 0.5,
                  fontFamily: 'monospace',
                }}
              >
                {authCode}
              </Typography>
            </Box>
          )}
        </TabPanel>
      </Paper>
    </Box>
  );
}

export default LoginPage;