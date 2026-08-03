import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, CircularProgress } from "@mui/material"

interface ProtectedRoutesProps{
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRoutesProps> = ({children}) => {
    const { isAuthenticated, isLoading } = useAuth0();

    if(isLoading) {
        return(
            <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
                <CircularProgress />
            </Box>
        )
    }

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

   

    return children;
}

export default ProtectedRoute;