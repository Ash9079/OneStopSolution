import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#0A2647" },      // dark navy
    secondary: { main: "#D4A017" },    // gold accent
    text: {
      primary: "#0A2647",
      secondary: "#5C6B7A",
    },
    background: {
      default: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: `'Inter', 'Segoe UI', Arial, sans-serif`,
  },
});

export default theme;