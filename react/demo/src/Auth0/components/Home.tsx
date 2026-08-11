import { useAuth0 } from "@auth0/auth0-react";
import { Box, Paper, Typography, Avatar, Button, Stack } from "@mui/material";


const Home = () => {
  const { user, logout } = useAuth0();
  const { getAccessTokenSilently, getAccessTokenWithPopup, getIdTokenClaims } = useAuth0();

  const fetchToken = async() => {
    // const token = await getAccessTokenSilently();
    const token = await getAccessTokenWithPopup();
    console.log(token); 
  }
  const fetchIDClaims = async() => {
    const claims = await getIdTokenClaims();
    console.log(claims);
  }

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

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
        <Avatar
          src={user?.picture}
          alt={user?.name}
          sx={{ width: 72, height: 72, mx: "auto", mb: 2 }}
        />
        <Typography variant="h6" sx={{fontWeight:600}}>
          Name: {user?.name ?? "Welcome"}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Email: {user?.email}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Unique user identifier: {user?.sub}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          First name: {user?.given_name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Last name: {user?.family_name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Nickname: {user?.nickname}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Preferred username: {user?.preferred_username}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Is Email verified: {user?.email_verified}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          User's locale: {user?.locale}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Last profile update timestamp: {user?.updated_at}
        </Typography>

        <Stack spacing={2}>
          <Button variant="outlined" color="error" fullWidth onClick={handleLogout}>
            Log Out
          </Button>
          <Button variant="outlined" color="success" fullWidth onClick={fetchToken}>
            Get Token
          </Button>
          <Button variant="outlined" color="warning" fullWidth onClick={fetchIDClaims}>
            Get ID Claims
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}

export default Home;