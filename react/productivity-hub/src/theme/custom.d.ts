import "@mui/material/styles";

declare module "@mui/material/styles"{
    interface Theme{
        dashboard:typeof dashboard;
    }

    interface ThemeOptions{
        dashboard?:typeof dashboard;
    }
}