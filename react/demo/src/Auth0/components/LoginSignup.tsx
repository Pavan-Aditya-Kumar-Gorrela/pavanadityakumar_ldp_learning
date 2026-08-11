import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  CircularProgress,
  Divider,
} from "@mui/material";


const LoginSignup = () => {
  const { loginWithRedirect, isAuthenticated, isLoading , loginWithPopup} = useAuth0();
  const navigate = useNavigate();


  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = () => {
    // loginWithRedirect();
    loginWithPopup();
  };

  const handleSignup = () => {
    loginWithRedirect({
      authorizationParams: { screen_hint: "signup" },
    });
  };

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#fafafa",
        px: 2,
      }}
    >
      <Paper
        elevation={2}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 380,
          textAlign: "center",
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom sx={{fontWeight:600}}>
          Welcome
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Sign in to your account or create a new one to continue.
        </Typography>

        <Stack spacing={2}>
          <Button variant="contained" size="large" fullWidth onClick={handleLogin}>
            Log In
          </Button>
          <Button variant="outlined" size="large" fullWidth onClick={handleSignup}>
            Sign Up
          </Button>
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Typography variant="caption" color="text.secondary">
          Authentication is handled securely by Auth0.
        </Typography>
      </Paper>
    </Box>
  );
}

export default LoginSignup;