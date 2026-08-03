import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Button,
  Container,
  Paper,
  Chip,
  Grid,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';

const methodLabel: Record<string, string> = {
  'id-token': 'ID Token (decoded client-side)',
  'access-token': 'Access Token (popup + userinfo endpoint)',
  'auth-code': 'Authorization Code (server exchange)',
};

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };


  if (!user) return null;

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar position="static" color="inherit" elevation={0} sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color="inherit" startIcon={<LogoutIcon />} onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Paper sx={{ p: 4 }}>
          <Box display="flex" alignItems="center" gap={2} sx={{ mb: 2 }}>
            <Avatar src={user.picture} alt={user.name} sx={{ width: 64, height: 64 }} />
            <Box>
              <Typography variant="h6">{user.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {user.email}
              </Typography>
            </Box>
          </Box>

          <Grid container spacing={1} sx={{ mt: 1 }}>
            <Grid item>
              <Chip
                size="small"
                label={`Signed in via: ${methodLabel[user.loginMethod] ?? user.loginMethod}`}
                color="primary"
                variant="outlined"
              />
            </Grid>
          </Grid>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
            This is a placeholder dashboard just to confirm the session persists
            (try refreshing the page) and that logout clears it correctly.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}


export default Dashboard;