import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6B8E23", // Olive green - soft and professional
      light: "#9ACD32",
      dark: "#556B2F",
    },
    secondary: {
      main: "#4682B4", 
      light: "#87CEEB",
      dark: "#2F4F4F",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F5F5F5",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "3.5rem",
      fontWeight: 700,
      "@media (max-width:600px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
      "@media (max-width:600px)": {
        fontSize: "1.75rem",
      },
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          padding: "8px 24px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});

export default theme;
