import { styled } from "@mui/material/styles";
import { Box, TextField, Typography } from "@mui/material";

export const ContactContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: theme.spacing(4),
  maxWidth: "1000px",
  margin: "0 auto",
  padding: theme.spacing(6),
  width: "100%",
  boxSizing: "border-box",
  overflowX: "hidden",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    padding: theme.spacing(3),
    gap: theme.spacing(2),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  },
}));

export const ContactForm = styled(Box)(({ theme }) => ({
  background: "rgba(255,255,255,0.08)",
  borderRadius: theme.spacing(3),
  boxShadow: theme.shadows[2],
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
    gap: theme.spacing(1.5),
    width: "100%",
    boxSizing: "border-box",
  },
  width: "100%",
  boxSizing: "border-box",
}));

export const ContactInfo = styled(Box)(({ theme }) => ({
  background: "rgba(255,255,255,0.08)",
  borderRadius: theme.spacing(3),
  boxShadow: theme.shadows[2],
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
    gap: theme.spacing(1.5),
    width: "100%",
    boxSizing: "border-box",
    marginTop: 0,
  },
  width: "100%",
  boxSizing: "border-box",
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  background: "rgba(255,255,255,0.15)",
  borderRadius: theme.spacing(1),
  width: "100%",
  boxSizing: "border-box",
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
