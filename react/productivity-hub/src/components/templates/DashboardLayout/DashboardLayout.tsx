import { Box } from "@mui/material";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {

    return (
        <Box 
            sx = {{
                minHeight: "100vh",
                p:4,
            }}
        >
            {children}
        </Box>
    )
}

export default DashboardLayout;