import { styled } from "@mui/material/styles";
import { Box, TextField, Typography } from "@mui/material";

export const ContactContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: theme.spacing(4),
  maxWidth: "1100px",
  margin: "0 auto",
  padding: theme.spacing(8, 4),
  width: "100%",
  boxSizing: "border-box",
  overflowX: "hidden", // Safety measure
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    padding: theme.spacing(4, 2),
    gap: theme.spacing(4),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3, 1.5),
  },
}));

export const ContactForm = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(30, 41, 59, 0.4)',
  backdropFilter: "blur(12px)",
  borderRadius: 24,
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(5),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  width: "100%",
  boxSizing: "border-box",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3, 2), // Reduced padding for 320px
    borderRadius: 20,
  },
}));

export const ContactInfo = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === 'light' ? 'rgba(37, 99, 235, 0.02)' : 'rgba(96, 165, 250, 0.02)',
  backdropFilter: "blur(12px)",
  borderRadius: 24,
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(5),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  width: "100%",
  boxSizing: "border-box",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4),
    marginTop: theme.spacing(2),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3, 2), // Reduced padding for 320px
    marginTop: 0,
    borderRadius: 20,
  },
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  background: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.02)' : 'rgba(255, 255, 255, 0.02)',
  borderRadius: 12,
  width: "100%",
  boxSizing: "border-box",
  "& .MuiOutlinedInput-root": {
    borderRadius: 12,
    "& fieldset": {
      borderColor: theme.palette.divider,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
  "& .MuiInputBase-root": {
    fontSize: 16,
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
  },
}));

export const ContactItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  fontSize: 18,
  [theme.breakpoints.down("sm")]: {
    fontSize: 16,
    gap: theme.spacing(1),
  },
}));

export const SocialLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  marginTop: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(1),
  },
}));

export const SocialIcon = styled(Box)(({ theme }) => ({
  fontSize: 28,
  color: theme.palette.primary.main,
  transition: "color 0.2s, transform 0.2s",
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.secondary.main,
    transform: "scale(1.15)",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 22,
  },
}));
