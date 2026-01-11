import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: "#2563eb",
      light: "#60a5fa",
      dark: "#1d4ed8",
      contrastText: "#ffffff",
    },
    secondary: {
      main: mode === 'light' ? "#7c3aed" : "#a78bfa",
      light: "#a78bfa",
      dark: "#5b21b6",
      contrastText: "#ffffff",
    },
    background: {
      default: mode === 'light' ? "#f8fafc" : "#0f172a",
      paper: mode === 'light' ? "#ffffff" : "#1e293b",
    },
    text: {
      primary: mode === 'light' ? "#0f172a" : "#f8fafc",
      secondary: mode === 'light' ? "#64748b" : "#94a3b8",
    },
  },
  typography: {
    fontFamily: '"Inter", "Outfit", "Roboto", sans-serif',
    h1: { fontWeight: 800, letterSpacing: "-0.02em" },
    h2: { fontWeight: 700, letterSpacing: "-0.01em" },
    h3: { fontWeight: 700, letterSpacing: "-0.01em" },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: {
      fontWeight: 600,
      letterSpacing: "0.01em",
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: mode === 'light' ? "rgba(255, 255, 255, 0.7)" : "rgba(15, 23, 42, 0.7)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${mode === 'light' ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"}`,
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "10px 24px",
          transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow: `0 4px 12px ${mode === 'light' ? "rgba(37, 99, 235, 0.15)" : "rgba(0, 0, 0, 0.3)"}`,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          border: `1px solid ${mode === 'light' ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"}`,
          boxShadow: mode === 'light' 
            ? "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
            : "0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.2)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: mode === 'light'
              ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
              : "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.3)",
          },
        },
      },
    },
  },
});

export default getTheme;
