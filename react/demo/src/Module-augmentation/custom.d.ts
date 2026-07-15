import "@mui/material/styles";

declare module "@mui/material/styles" {
    interface Palette {
        invoice:{
            card: string;
            amount: string;
            icon: string;
        };

        dashboard:{
            sidebar: string;
            header: string;
            card: string;
        }
    }

    interface PaletteOptions {
        invoice?: {
            card?: string;
            amount?: string;
            icon?: string;
        };
        dashboard?: {
            sidebar?: string;
            header?: string;
            card?: string;
        };
    }
}
