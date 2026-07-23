import DashboardLayout from "../templates/DashboardLayout/DashboardLayout";
import { 
    Box,
    Card,
    Typography,
    Button
} from "@mui/material";

const Dashboard = () => {
    return (
        <DashboardLayout>
            <Box sx={(theme)=>({
                bgcolor: theme.palette.background.paper,
            })}>
                <Card sx={(theme) => ({
                    width : theme.dashboard.cardWidth,
                    height : theme.dashboard.cardHeight,
                })}>
                    <Typography variant = "h1">Hello World</Typography>
                </Card>
                <Button variant="contained" color="primary">Click Me</Button>
            </Box>
        </DashboardLayout>
    )
}

export default Dashboard;
 